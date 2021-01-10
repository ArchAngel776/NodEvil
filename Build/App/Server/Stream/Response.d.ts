/// <reference types="node" />
import ViewResponse from "../../../Data/Structures/ViewResponse";
import { HttpPossibleResponse } from "../../../Data/Types/HttpPossibleResponse";
import { HttpVersion } from "../../../Data/Types/HttpVersion";
import { MimeType } from "../../../Data/Types/MimeType";
import ResponseProvider from "./Response/ResponseProvider";
export default class Response {
    protected provider: ResponseProvider;
    constructor(version: HttpVersion, core: HttpPossibleResponse);
    sendView(viewResponse: ViewResponse): void;
    sendFile(fileContent: string | Buffer, mimeType: MimeType): void;
    sendNotFound(): void;
    protected createProvider(version: HttpVersion, core: HttpPossibleResponse): ResponseProvider | never;
}
//# sourceMappingURL=Response.d.ts.map