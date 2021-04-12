"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpVersion_1 = require("../../../Data/Statics/HttpVersion");
const HttpVersionUnsupported_1 = require("../Exception/HttpVersionUnsupported");
const Http2ResponseProvider_1 = require("./Response/Providers/Http2ResponseProvider");
const HttpResponseProvider_1 = require("./Response/Providers/HttpResponseProvider");
class Response {
    constructor(version, core) {
        this.provider = this.createProvider(version, core);
    }
    sendView(viewResponse) {
        this.provider.sendView(viewResponse);
    }
    sendFile(fileContent, mimeType) {
        this.provider.sendFile(fileContent, mimeType);
    }
    sendNotFound() {
        this.provider.sendNotFound();
    }
    createProvider(version, core) {
        switch (version) {
            case HttpVersion_1.HTTP_VERSION.v1_1:
                return new HttpResponseProvider_1.default(core);
            case HttpVersion_1.HTTP_VERSION.v2_0:
                return new Http2ResponseProvider_1.default(core);
            default:
                throw new HttpVersionUnsupported_1.default(version);
        }
    }
}
exports.default = Response;
//# sourceMappingURL=Response.js.map