"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServerPortNumerable extends Error {
    constructor(port) {
        super();
        this.name = "Server Port Numerable Exception";
        this.message = "Specyfic port must an integer. Value: " + port + " is incorrect.";
    }
}
exports.default = ServerPortNumerable;
