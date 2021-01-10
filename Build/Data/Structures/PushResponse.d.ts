/// <reference types="node" />
import HttpResponseHeaders from "./HttpResponseHeaders";
export default interface PushResponse {
    status: number;
    path: string;
    headers: HttpResponseHeaders;
    content?: string | Buffer;
}
//# sourceMappingURL=PushResponse.d.ts.map