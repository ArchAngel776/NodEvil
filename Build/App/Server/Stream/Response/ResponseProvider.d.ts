/// <reference types="node" />
import ViewResponse from "../../../../Data/Structures/ViewResponse";
import { HttpPossibleResponse } from "../../../../Data/Types/HttpPossibleResponse";
import { MimeType } from "../../../../Data/Types/MimeType";
export default abstract class ResponseProvider {
    protected abstract core: HttpPossibleResponse;
    abstract sendView(viewResponse: ViewResponse): void;
    abstract sendFile(fileContent: string | Buffer, mimeType: MimeType): void;
    abstract sendNotFound(): void;
}
//# sourceMappingURL=ResponseProvider.d.ts.map