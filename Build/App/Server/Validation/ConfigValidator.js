"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpVersionValidation_1 = require("./ServerValidation/HttpVersionValidation");
const PortValidation_1 = require("./ServerValidation/PortValidation");
const SslValidation_1 = require("./ServerValidation/SslValidation");
class ConfigValidator {
    constructor(config) {
        this.portValidation = new PortValidation_1.default(config);
        this.httpVersionValidation = new HttpVersionValidation_1.default(config);
        this.sslValidation = new SslValidation_1.default(config);
    }
    validate() {
        this.portValidation.validate();
        this.httpVersionValidation.validate();
        this.sslValidation.validate();
    }
}
exports.default = ConfigValidator;
