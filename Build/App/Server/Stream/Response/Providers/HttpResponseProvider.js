"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus_1 = require("../../../../../Data/Statics/HttpStatus");
const ResponseProvider_1 = require("../ResponseProvider");
class HttpResponseProvider extends ResponseProvider_1.default {
    constructor(core) {
        super();
        this.core = core;
    }
    sendView(viewResponse) {
        const headers = viewResponse.headers;
        this.core.writeHead(viewResponse.status, headers);
        if (viewResponse.content) {
            this.core.write(viewResponse.content);
        }
        this.core.end();
    }
    sendFile(fileContent, mimeType) {
        this.core.writeHead(HttpStatus_1.HTTP_STATUS.OK, { "Content-Type": mimeType });
        this.core.write(fileContent);
        this.core.end();
    }
    sendNotFound() {
        this.core.writeHead(HttpStatus_1.HTTP_STATUS.NOT_FOUND, { "Content-Type": "text/html;charset=utf-8" });
        this.core.write("<title>Page not found</title><h1>Error 404 - page not found</h1>");
        this.core.end();
    }
}
exports.default = HttpResponseProvider;
//# sourceMappingURL=HttpResponseProvider.js.map