"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SslPrivateKeyWrongPath extends Error {
    constructor(privateKeyPath) {
        super();
        this.name = "SSL Private Key Wrong Path Exception";
        this.message = "Path: " + privateKeyPath + " is incorrect SSL private key path.";
    }
}
exports.default = SslPrivateKeyWrongPath;
//# sourceMappingURL=SslPrivateKeyWrongPath.js.map