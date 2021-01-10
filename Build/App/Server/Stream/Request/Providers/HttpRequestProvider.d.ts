/// <reference types="node" />
import HttpRequestBody from "../../../../../Data/Structures/HttpRequestBody";
import HttpRequestHeaders from "../../../../../Data/Structures/HttpRequestHeaders";
import { HttpMethod } from "../../../../../Data/Types/HttpMethod";
import RequestProvider from "../RequestProvider";
import { IncomingMessage } from "http";
export default class HttpRequestProvider extends RequestProvider {
    protected core: IncomingMessage;
    constructor(core: IncomingMessage);
    getUrl(): string;
    getType(): HttpMethod | never;
    getHeaders(): HttpRequestHeaders;
    getBody(): Promise<HttpRequestBody> | never;
}
//# sourceMappingURL=HttpRequestProvider.d.ts.map