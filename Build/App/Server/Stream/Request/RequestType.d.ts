/// <reference types="node" />
import { HttpMethod } from "../../../../Data/Types/HttpMethod";
import * as http from "http";
import * as http2 from "http2";
export default abstract class RequestType {
    abstract getUrl(url: string): string;
    abstract getMethod(): HttpMethod;
    abstract getHeaders(headers: http.IncomingHttpHeaders | http2.IncomingHttpHeaders): any;
    abstract getData(): any;
}
//# sourceMappingURL=RequestType.d.ts.map