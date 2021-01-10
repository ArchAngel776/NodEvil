"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const SslCertificateRequired_1 = require("../Exception/SslCertificateRequired");
const SslPrivateKeyRequired_1 = require("../Exception/SslPrivateKeyRequired");
const ServerValidation_1 = require("./ServerValidation");
class SslValidation extends ServerValidation_1.default {
    validate() {
        if (this.config.ssl !== undefined) {
            if (this.config.ssl.privateKey === undefined) {
                throw new SslPrivateKeyRequired_1.default();
            }
            else if (!(fs.existsSync(this.config.ssl.privateKey) && fs.lstatSync(this.config.ssl.privateKey).isFile())) {
            }
            else if (this.config.ssl.certificate === undefined) {
                throw new SslCertificateRequired_1.default();
            }
            else if (!(fs.existsSync(this.config.ssl.certificate) && fs.lstatSync(this.config.ssl.certificate).isFile())) {
            }
            else if (this.config.ssl.chain !== undefined && !(fs.existsSync(this.config.ssl.chain) && fs.lstatSync(this.config.ssl.chain).isFile())) {
            }
        }
    }
}
exports.default = SslValidation;
