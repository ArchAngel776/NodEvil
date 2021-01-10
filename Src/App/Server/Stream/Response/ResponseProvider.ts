import ViewResponse from "../../../../Data/Structures/ViewResponse";
import { HttpPossibleResponse } from "../../../../Data/Types/HttpPossibleResponse";
import { MimeType } from "../../../../Data/Types/MimeType";

export default abstract class ResponseProvider {

    protected abstract core : HttpPossibleResponse;

    public abstract sendView(viewResponse : ViewResponse) : void;

    public abstract sendFile(fileContent : string | Buffer, mimeType : MimeType) : void;

    public abstract sendNotFound() : void;

}