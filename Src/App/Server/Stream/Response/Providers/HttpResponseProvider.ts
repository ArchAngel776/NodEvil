import { ServerResponse } from "http";
import { HTTP_STATUS } from "../../../../../Data/Statics/HttpStatus";
import ViewResponse from "../../../../../Data/Structures/ViewResponse";
import { MimeType } from "../../../../../Data/Types/MimeType";
import ResponseProvider from "../ResponseProvider";

export default class HttpResponseProvider extends ResponseProvider {

    protected core : ServerResponse;

    public constructor(core : ServerResponse) {

        super();

        this.core = core;

    }

    public sendView(viewResponse : ViewResponse) : void {

        const headers = viewResponse.headers;

        this.core.writeHead(viewResponse.status, headers);

        if (viewResponse.content) {

            this.core.write(viewResponse.content);

        }

        this.core.end();

    }

    public sendFile(fileContent : string | Buffer, mimeType : MimeType) : void {

        this.core.writeHead(HTTP_STATUS.OK, { "Content-Type": mimeType });

        this.core.write(fileContent);

        this.core.end();

    }

    public sendNotFound() : void {

        this.core.writeHead(HTTP_STATUS.NOT_FOUND, { "Content-Type": "text/html;charset=utf-8" });

        this.core.write("<title>Page not found</title><h1>Error 404 - page not found</h1>");

        this.core.end();

    }

}