"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorInstance_1 = require("../../Exception/ErrorInstance");
class CrudOperationUnsupported extends ErrorInstance_1.default {
    constructor(operation) {
        super(operation);
    }
    getTitle() {
        return "CRUD Operation Unsupported Exception";
    }
    getMessage(operation) {
        return `Operation "${operation}" is unsupported CRUD operation.`;
    }
}
exports.default = CrudOperationUnsupported;
