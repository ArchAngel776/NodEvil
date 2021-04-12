"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpVersionStringFormat extends Error {
    constructor() {
        super();
        this.name = "HTTP Version String Format Exception";
        this.message = "HTTP version must be appear in string format.";
    }
}
exports.default = HttpVersionStringFormat;
//# sourceMappingURL=HttpVersionStringFormat.js.map