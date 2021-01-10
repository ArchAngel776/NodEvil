"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpVersionRequried extends Error {
    constructor() {
        super();
        this.name = "HTTP Version Required Exception";
        this.message = "Server configuration requires specyfic HTTP version.";
    }
}
exports.default = HttpVersionRequried;
