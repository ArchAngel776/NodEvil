"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpVersionUnsupported extends Error {
    constructor(httpVersion) {
        super();
        this.name = "HTTP Version Unsupported Exception";
        this.message = "Version: " + httpVersion + " is unsupported HTTP version. Supported versions are: 1.1, 2.0";
    }
}
exports.default = HttpVersionUnsupported;
