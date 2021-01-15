import HttpRequestBody from "../Data/Structures/HttpRequestBody";
import HttpRequestHeaders from "../Data/Structures/HttpRequestHeaders";
import { HttpVersion } from "../Data/Types/HttpVersion";
import ClientProvider from "./Client/ClientProvider";
export default class Client {
    protected httpVersion: HttpVersion;
    protected provider: ClientProvider;
    constructor(httpVersion: HttpVersion, url?: string);
    url(url: string): Client;
    headers(headers: HttpRequestHeaders): Client;
    body(body: HttpRequestBody): Client;
    get(): Promise<any>;
    post(): Promise<any>;
    protected createProvider(url: string): ClientProvider | never;
}
//# sourceMappingURL=Client.d.ts.map