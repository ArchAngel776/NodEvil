import { IncomingMessage } from "http";
import { Http2ServerRequest } from "http2";
import { HTTP_VERSION } from "../../../Data/Statics/HttpVersion";
import HttpRequestBody from "../../../Data/Structures/HttpRequestBody";
import HttpRequestHeaders from "../../../Data/Structures/HttpRequestHeaders";
import { HttpMethod } from "../../../Data/Types/HttpMethod";
import { HttpPossibleRequest } from "../../../Data/Types/HttpPossibleRequest";
import { HttpVersion } from "../../../Data/Types/HttpVersion";
import HttpVersionUnsupported from "../Exception/HttpVersionUnsupported";
import Http2RequestProvider from "./Request/Providers/Http2RequestProvider";
import HttpRequestProvider from "./Request/Providers/HttpRequestProvider";
import RequestProvider from "./Request/RequestProvider";

export default class Request {

    protected provider : RequestProvider;

    public constructor(version : HttpVersion, core : HttpPossibleRequest) {

        this.provider = this.createProvider(version, core);

    }

    public getUrl() : string {

        return this.provider.getUrl();

    }

    public getType() : HttpMethod {

        return this.provider.getType();

    }

    public getHeaders() : HttpRequestHeaders {

        return this.provider.getHeaders();

    }

    public async getParams() : Promise<HttpRequestBody> {

        return this.provider.getBody();

    }

    protected createProvider(version : HttpVersion, core : HttpPossibleRequest) : RequestProvider | never {

        switch (version) {

            case HTTP_VERSION.v1_1:

                return new HttpRequestProvider(core as IncomingMessage);

            case HTTP_VERSION.v2_0:

                return new Http2RequestProvider(core as Http2ServerRequest);

            default:

                throw new HttpVersionUnsupported(version);

        }

    }

}