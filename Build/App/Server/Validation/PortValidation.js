"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServerPortNumerable_1 = require("../Exception/ServerPortNumerable");
const ServerPortRange_1 = require("../Exception/ServerPortRange");
const ServerPortRequired_1 = require("../Exception/ServerPortRequired");
const ServerValidation_1 = require("./ServerValidation");
class PortValidation extends ServerValidation_1.default {
    validate() {
        if (this.config.port === undefined) {
            throw new ServerPortRequired_1.default();
        }
        else if (typeof this.config.port !== "number" || parseInt(this.config.port.toString()) === NaN) {
            throw new ServerPortNumerable_1.default(this.config.port);
        }
        else if (this.config.port > 65535 || this.config.port < 1) {
            throw new ServerPortRange_1.default(this.config.port);
        }
    }
}
exports.default = PortValidation;
