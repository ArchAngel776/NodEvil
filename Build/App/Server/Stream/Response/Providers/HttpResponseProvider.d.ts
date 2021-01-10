/// <reference types="node" />
import { ServerResponse } from "http";
import ViewResponse from "../../../../../Data/Structures/ViewResponse";
import { MimeType } from "../../../../../Data/Types/MimeType";
import ResponseProvider from "../ResponseProvider";
export default class HttpResponseProvider extends ResponseProvider {
    protected core: ServerResponse;
    constructor(core: ServerResponse);
    sendView(viewResponse: ViewResponse): void;
    sendFile(fileContent: string | Buffer, mimeType: MimeType): void;
    sendNotFound(): void;
}
//# sourceMappingURL=HttpResponseProvider.d.ts.map