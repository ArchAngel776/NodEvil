import { HTTP_METHOD } from "../../../../../Data/Statics/HttpMethod";
import HttpRequestBody from "../../../../../Data/Structures/HttpRequestBody";
import HttpRequestHeaders from "../../../../../Data/Structures/HttpRequestHeaders";
import { HttpMethod } from "../../../../../Data/Types/HttpMethod";
import HttpMethodUnsupported from "../../../Exception/HttpMethodUnsupported";
import Url from "../../../Tools/Url";
import RequestProvider from "../RequestProvider";
import BodyRequest from "../../../Tools/BodyRequest";
import { HttpContentType } from "../../../../../Data/Types/HttpContentType";
import { Http2ServerRequest } from "http2";

export default class Http2RequestProvider extends RequestProvider {

    protected core : Http2ServerRequest;

    public constructor(core : Http2ServerRequest) {

        super();

        this.core = core;

    }

    public getUrl() : string {

        const result = new Url(this.core.headers[":path"] as string).pure();

        return result;

    }

    public getType() : HttpMethod {

        switch (this.core.headers[":method"]) {

            case HTTP_METHOD.Get:

                return HTTP_METHOD.Get;

            case HTTP_METHOD.Post:

                return HTTP_METHOD.Post;

            default:

                throw new HttpMethodUnsupported(this.core.headers[":method"] as HttpMethod);

        }

    }

    public getHeaders() : HttpRequestHeaders {

        const result = this.core.headers as HttpRequestHeaders;

        return result;

    }

    public async getBody() : Promise<HttpRequestBody> | never {

        switch (this.getType()) {

            case HTTP_METHOD.Get:

                return new Url(this.core.url as string).params();

            case HTTP_METHOD.Post:

                const contentType = this.core.headers["content-type"] as HttpContentType;

                return await new BodyRequest(this.core).getBody(contentType);

            default:

                throw new HttpMethodUnsupported(this.getType());

        }

    }

}