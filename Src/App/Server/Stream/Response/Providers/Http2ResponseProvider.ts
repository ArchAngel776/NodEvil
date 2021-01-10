import { Http2ServerResponse, ServerHttp2Stream } from "http2";
import { HTTP_STATUS } from "../../../../../Data/Statics/HttpStatus";
import { MIME_TYPE } from "../../../../../Data/Statics/MimeType";
import PushResponse from "../../../../../Data/Structures/PushResponse";
import ViewResponse from "../../../../../Data/Structures/ViewResponse";
import { MimeType } from "../../../../../Data/Types/MimeType";
import ResponseProvider from "../ResponseProvider";

export default class Http2ResponseProvider extends ResponseProvider {

    protected core : Http2ServerResponse;

    public constructor(core : Http2ServerResponse) {

        super();

        this.core = core;

    }

    public sendView(viewResponse : ViewResponse) : void {

        if (viewResponse.push) {

            for (const pushResponse of viewResponse.push) {

                this.sendPush(pushResponse);

            }

        }

        const headers = {
            ":status": viewResponse.status,
            ...viewResponse.headers
        };

        this.core.stream.respond(headers);

        if (viewResponse.content) {

            this.core.stream.write(viewResponse.content);

        }

        this.core.stream.end();
        
    }

    protected sendPush(pushResponse : PushResponse) : void {

        const pushHeaders = {
            ":path": pushResponse.path
        };

        this.core.stream.pushStream(pushHeaders, (err : Error | null, pushStream : ServerHttp2Stream) => {

            if (err) {

                throw err;

            }

            const headers = {
                ":status": pushResponse.status,
                ...pushResponse.headers
            };

            pushStream.respond(headers);

            if (pushResponse.content) {

                pushStream.write(pushResponse.content);

            }

            pushStream.end();

        });

    }

    public sendFile(fileContent : string | Buffer, mimeType : MimeType) : void {

        const headers = {
            ":status": HTTP_STATUS.OK,
            "Content-type": mimeType
        };

        this.core.stream.respond(headers);

        this.core.stream.write(fileContent);

        this.core.stream.end();

    }

    public sendNotFound() : void {

        const headers = {
            ":status": HTTP_STATUS.NOT_FOUND,
            "Content-type": MIME_TYPE.TEXT_HTML
        };

        this.core.stream.respond(headers);

        this.core.stream.write("<meta charset='utf-8' /><title>Page not found</title><h1>Error 404 - page not found</h1>");

        this.core.stream.end();

    }

}