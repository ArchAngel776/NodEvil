import HttpRequestBody from "../../../Data/Structures/HttpRequestBody";
import HttpRequestHeaders from "../../../Data/Structures/HttpRequestHeaders";
import { HttpMethod } from "../../../Data/Types/HttpMethod";
import { HttpPossibleRequest } from "../../../Data/Types/HttpPossibleRequest";
import { HttpVersion } from "../../../Data/Types/HttpVersion";
import RequestProvider from "./Request/RequestProvider";
export default class Request {
    protected provider: RequestProvider;
    constructor(version: HttpVersion, core: HttpPossibleRequest);
    getUrl(): string;
    getType(): HttpMethod;
    getHeaders(): HttpRequestHeaders;
    getParams(): Promise<HttpRequestBody>;
    protected createProvider(version: HttpVersion, core: HttpPossibleRequest): RequestProvider | never;
}
//# sourceMappingURL=Request.d.ts.map