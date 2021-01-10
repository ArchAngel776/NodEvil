"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus_1 = require("../../../../../Data/Statics/HttpStatus");
const MimeType_1 = require("../../../../../Data/Statics/MimeType");
const ResponseProvider_1 = require("../ResponseProvider");
class Http2ResponseProvider extends ResponseProvider_1.default {
    constructor(core) {
        super();
        this.core = core;
    }
    sendView(viewResponse) {
        if (viewResponse.push) {
            for (const pushResponse of viewResponse.push) {
                this.sendPush(pushResponse);
            }
        }
        const headers = Object.assign({ ":status": viewResponse.status }, viewResponse.headers);
        this.core.stream.respond(headers);
        if (viewResponse.content) {
            this.core.stream.write(viewResponse.content);
        }
        this.core.stream.end();
    }
    sendPush(pushResponse) {
        const pushHeaders = {
            ":path": pushResponse.path
        };
        this.core.stream.pushStream(pushHeaders, (err, pushStream) => {
            if (err) {
                throw err;
            }
            const headers = Object.assign({ ":status": pushResponse.status }, pushResponse.headers);
            pushStream.respond(headers);
            if (pushResponse.content) {
                pushStream.write(pushResponse.content);
            }
            pushStream.end();
        });
    }
    sendFile(fileContent, mimeType) {
        const headers = {
            ":status": HttpStatus_1.HTTP_STATUS.OK,
            "Content-type": mimeType
        };
        this.core.stream.respond(headers);
        this.core.stream.write(fileContent);
        this.core.stream.end();
    }
    sendNotFound() {
        const headers = {
            ":status": HttpStatus_1.HTTP_STATUS.NOT_FOUND,
            "Content-type": MimeType_1.MIME_TYPE.TEXT_HTML
        };
        this.core.stream.respond(headers);
        this.core.stream.write("<meta charset='utf-8' /><title>Page not found</title><h1>Error 404 - page not found</h1>");
        this.core.stream.end();
    }
}
exports.default = Http2ResponseProvider;
