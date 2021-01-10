/// <reference types="node" />
import { HttpMethod } from "../../../../../Data/Types/HttpMethod";
import RequestType from "../RequestType";
import * as http from 'http';
import * as http2 from 'http2';
export default class PostRequestType extends RequestType {
    getUrl(url: string): string;
    getMethod(): HttpMethod;
    getHeaders(headers: http.IncomingHttpHeaders | http2.IncomingHttpHeaders): void;
    getData(): void;
}
//# sourceMappingURL=PostRequestType.d.ts.map