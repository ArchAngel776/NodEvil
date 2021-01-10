"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SslPrivateKeyRequired extends Error {
    constructor() {
        super();
        this.name = "SSL Private Key Required Exception";
        this.message = "Server with SSL requires path to private key.";
    }
}
exports.default = SslPrivateKeyRequired;
