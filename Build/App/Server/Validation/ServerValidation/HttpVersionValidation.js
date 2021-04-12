"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpVersionRequired_1 = require("../../Exception/HttpVersionRequired");
const HttpVersionStringFormat_1 = require("../../Exception/HttpVersionStringFormat");
const HttpVersionUnsupported_1 = require("../../Exception/HttpVersionUnsupported");
const ServerValidation_1 = require("../ServerValidation");
class HttpVersionValidation extends ServerValidation_1.default {
    validate() {
        if (this.config.httpVersion === undefined) {
            throw new HttpVersionRequired_1.default();
        }
        else if (typeof this.config.httpVersion !== "string") {
            throw new HttpVersionStringFormat_1.default();
        }
        else if (this.config.httpVersion !== "1.1" && this.config.httpVersion !== "2.0") {
            throw new HttpVersionUnsupported_1.default(this.config.httpVersion);
        }
    }
}
exports.default = HttpVersionValidation;
//# sourceMappingURL=HttpVersionValidation.js.map