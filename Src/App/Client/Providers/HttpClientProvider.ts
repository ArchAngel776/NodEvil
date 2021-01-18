import { IncomingMessage } from "http";
import * as https from "https";
import { HTTP_METHOD } from "../../../Data/Statics/HttpMethod";
import Url from "../../Server/Tools/Url";
import ClientProvider from "../ClientProvider";

export default class HttpClientProvider extends ClientProvider {

    public async get() : Promise<any> {

        return new Promise(resolve => {

            const url = new Url(this.url);

            url.setParams(this.body);

            const options : https.RequestOptions = {
                method: HTTP_METHOD.Get,
                headers: this.headers
            };

            const httpRequest = https.request(url.full() , options, (req : IncomingMessage) => {

                let dataString = "";

                req.on("data", chunk => dataString += chunk);

                req.on("end", () => {

                    resolve(dataString);

                });

            });

            httpRequest.end();

        });

    }

    public async post() : Promise<any> {

        return new Promise(resolve => {

            const options : https.RequestOptions = {
                method: HTTP_METHOD.Post,
                headers: this.headers
            };

            const httpRequest = https.request(this.url, options, (req : IncomingMessage) => {

                let dataString = "";

                req.on("data", chunk => dataString += chunk);

                req.on("end", () => {

                    resolve(dataString);

                });

            });

            httpRequest.write(this.body);

            httpRequest.end();

        });

    }

}