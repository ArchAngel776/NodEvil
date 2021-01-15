import { IncomingMessage } from "http";
import * as https from "https";
import { HTTP_METHOD } from "../../../Data/Statics/HttpMethod";
import { HTTP_VERSION } from "../../../Data/Statics/HttpVersion";
import Request from "../../Server/Stream/Request";
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

            const httpRequest = https.request(url.full() , options, async (req : IncomingMessage) => {

                const request = new Request(HTTP_VERSION.v1_1, req);

                const result = await request.getParams();

                resolve(result);

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

            const httpRequest = https.request(this.url, options, async (req : IncomingMessage) => {

                const request = new Request(HTTP_VERSION.v1_1, req);

                const result = await request.getParams();

                resolve(result);

            });

            httpRequest.write(JSON.stringify(this.body));

            httpRequest.end();

        });

    }

}