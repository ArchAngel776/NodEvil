import HttpRequestBody from "../../Data/Structures/HttpRequestBody";
import HttpRequestHeaders from "../../Data/Structures/HttpRequestHeaders";
export default abstract class ClientProvider {
    protected url: string;
    protected headers: HttpRequestHeaders;
    protected body: HttpRequestBody;
    constructor(url: string);
    setUrl(url: string): void;
    setHeaders(headers: HttpRequestHeaders): void;
    setBody(body: HttpRequestBody): void;
    abstract get(): Promise<any>;
    abstract post(): Promise<any>;
}
//# sourceMappingURL=ClientProvider.d.ts.map