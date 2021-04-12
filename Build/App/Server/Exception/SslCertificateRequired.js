"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SslCertificateRequired extends Error {
    constructor() {
        super();
        this.name = "SSL Certificate Required Exception";
        this.message = "Server with SSL requires path to certificate.";
    }
}
exports.default = SslCertificateRequired;
//# sourceMappingURL=SslCertificateRequired.js.map