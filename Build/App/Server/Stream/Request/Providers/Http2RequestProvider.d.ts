/// <reference types="node" />
import HttpRequestBody from "../../../../../Data/Structures/HttpRequestBody";
import HttpRequestHeaders from "../../../../../Data/Structures/HttpRequestHeaders";
import { HttpMethod } from "../../../../../Data/Types/HttpMethod";
import RequestProvider from "../RequestProvider";
import { Http2ServerRequest } from "http2";
export default class Http2RequestProvider extends RequestProvider {
    protected core: Http2ServerRequest;
    constructor(core: Http2ServerRequest);
    getUrl(): string;
    getType(): HttpMethod;
    getHeaders(): HttpRequestHeaders;
    getBody(): Promise<HttpRequestBody> | never;
}
//# sourceMappingURL=Http2RequestProvider.d.ts.map