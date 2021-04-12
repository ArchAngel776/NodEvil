"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorInstance_1 = require("../../Exception/ErrorInstance");
class ValidationType extends ErrorInstance_1.default {
    constructor(type) {
        super(type);
    }
    getTitle() {
        return "Validation Type Exception";
    }
    getMessage(type) {
        return `Type "${type}" is incorrect validation type.`;
    }
}
exports.default = ValidationType;
//# sourceMappingURL=ValidationType.js.map