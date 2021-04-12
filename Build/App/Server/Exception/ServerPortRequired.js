"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServerPortRequired extends Error {
    constructor() {
        super();
        this.name = "Server Port Required Exception";
        this.message = "Server configuration requires a specyfic port.";
    }
}
exports.default = ServerPortRequired;
//# sourceMappingURL=ServerPortRequired.js.map