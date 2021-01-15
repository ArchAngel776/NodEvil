import ClientProvider from "../ClientProvider";
import * as http2 from "http2";
import Url from "../../Server/Tools/Url";
import { HTTP_METHOD } from "../../../Data/Statics/HttpMethod";

export default class Http2ClientProvider extends ClientProvider {

    public async get() : Promise<any> {

        return new Promise(resolve => {

            const url = new Url(this.url);

            url.setParams(this.body);

            const client = http2.connect(url.domain());

            client.on('error', (err) => console.log(err));

            const headers : http2.OutgoingHttpHeaders = {
                ":path": url.path(),
                ":method": HTTP_METHOD.Get,
                ...this.headers
            }

            const req = client.request(headers);

            req.setEncoding("utf-8");

            let data = "";

            req.on("data", (chunk) => {
                
                data += chunk;
            
            });

            req.on("end", () => {

                client.close();

                resolve(data);

            });

            req.end();

        });

    }

    public async post() : Promise<any> {

        return new Promise(resolve => {

            const url = new Url(this.url);

            const client = http2.connect(url.domain());

            client.on('error', (err) => console.log(err));

            const headers : http2.OutgoingHttpHeaders = {
                ":path": url.path(),
                ":method": HTTP_METHOD.Post,
                ...this.headers
            }

            const req = client.request(headers);

            req.setEncoding("utf-8");

            let data = "";

            req.on("data", (chunk) => {
                
                data += chunk;
            
            });

            req.on("end", () => {

                client.close();

                resolve(data);

            });

            req.write(JSON.stringify(this.body));

            req.end();

        });

    }

}