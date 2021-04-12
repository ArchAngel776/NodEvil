"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpMethodUnsupported extends Error {
    constructor(method) {
        super();
        this.name = "HTTP Method Unsupported Exception";
        this.message = "HTTP method: " + method + " is unsupported.";
    }
}
exports.default = HttpMethodUnsupported;
//# sourceMappingURL=HttpMethodUnsupported.js.map