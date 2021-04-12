"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const SslCertificateRequired_1 = require("../../Exception/SslCertificateRequired");
const SslCertificateWrongPath_1 = require("../../Exception/SslCertificateWrongPath");
const SslChainWrongPath_1 = require("../../Exception/SslChainWrongPath");
const SslPrivateKeyRequired_1 = require("../../Exception/SslPrivateKeyRequired");
const SslPrivateKeyWrongPath_1 = require("../../Exception/SslPrivateKeyWrongPath");
const ServerValidation_1 = require("../ServerValidation");
class SslValidation extends ServerValidation_1.default {
    validate() {
        if (this.config.ssl !== undefined) {
            if (this.config.ssl.privateKey === undefined) {
                throw new SslPrivateKeyRequired_1.default();
            }
            else if (!(fs.existsSync(this.config.ssl.privateKey) && fs.lstatSync(this.config.ssl.privateKey).isFile())) {
                throw new SslPrivateKeyWrongPath_1.default(this.config.ssl.privateKey);
            }
            else if (this.config.ssl.certificate === undefined) {
                throw new SslCertificateRequired_1.default();
            }
            else if (!(fs.existsSync(this.config.ssl.certificate) && fs.lstatSync(this.config.ssl.certificate).isFile())) {
                throw new SslCertificateWrongPath_1.default(this.config.ssl.certificate);
            }
            else if (this.config.ssl.chain !== undefined && !(fs.existsSync(this.config.ssl.chain) && fs.lstatSync(this.config.ssl.chain).isFile())) {
                throw new SslChainWrongPath_1.default(this.config.ssl.chain);
            }
        }
    }
}
exports.default = SslValidation;
//# sourceMappingURL=SslValidation.js.map