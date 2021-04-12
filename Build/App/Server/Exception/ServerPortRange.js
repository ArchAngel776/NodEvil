"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServerPortRange extends Error {
    constructor(port) {
        super();
        this.name = "Server Port Range Exception";
        this.message = "Port must be an number in range 1-65535. Value: " + port + " is incorrect.";
    }
}
exports.default = ServerPortRange;
//# sourceMappingURL=ServerPortRange.js.map