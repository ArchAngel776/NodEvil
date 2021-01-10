"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SslCertificateWrongPath extends Error {
    constructor(certificatePath) {
        super();
        this.name = "SSL Certificate Wrong Path Exception";
        this.message = "Path: " + certificatePath + " is incorrect SSL certificate path.";
    }
}
exports.default = SslCertificateWrongPath;
