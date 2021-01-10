import HttpRequestBody from "../../../Data/Structures/HttpRequestBody";
import { HttpContentType } from "../../../Data/Types/HttpContentType";
import { HttpPossibleRequest } from "../../../Data/Types/HttpPossibleRequest";
import * as qs from "querystring";
import { HTTP_CONTENT_TYPE } from "../../../Data/Statics/HttpContentType";

export default class BodyRequest {

    protected requestCore : HttpPossibleRequest;

    public constructor(requestCore : HttpPossibleRequest) {

        this.requestCore = requestCore;

    }

    public getBody(contentType : HttpContentType) : Promise<HttpRequestBody> {

        return new Promise(resolve => {

            let dataString = "";

            this.requestCore.on("data", chunk => dataString += chunk);

            this.requestCore.on("end", () => resolve(this.getType(dataString, contentType)));

        });

    }

    protected getType(dataString : string, contentType : HttpContentType) : HttpRequestBody {

        switch (contentType) {

            case HTTP_CONTENT_TYPE.JSON:

                return JSON.parse(dataString);

            default:

                return JSON.parse(JSON.stringify(qs.parse(dataString)));

        }

    }

}