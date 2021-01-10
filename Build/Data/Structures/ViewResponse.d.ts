/// <reference types="node" />
import HttpResponseHeaders from "./HttpResponseHeaders";
import PushResponse from "./PushResponse";
export default interface ViewResponse {
    status: number;
    headers: HttpResponseHeaders;
    content?: string | Buffer;
    push?: Array<PushResponse>;
}
//# sourceMappingURL=ViewResponse.d.ts.map