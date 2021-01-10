/// <reference types="node" />
import { Http2ServerResponse } from "http2";
import PushResponse from "../../../../../Data/Structures/PushResponse";
import ViewResponse from "../../../../../Data/Structures/ViewResponse";
import { MimeType } from "../../../../../Data/Types/MimeType";
import ResponseProvider from "../ResponseProvider";
export default class Http2ResponseProvider extends ResponseProvider {
    protected core: Http2ServerResponse;
    constructor(core: Http2ServerResponse);
    sendView(viewResponse: ViewResponse): void;
    protected sendPush(pushResponse: PushResponse): void;
    sendFile(fileContent: string | Buffer, mimeType: MimeType): void;
    sendNotFound(): void;
}
//# sourceMappingURL=Http2ResponseProvider.d.ts.map