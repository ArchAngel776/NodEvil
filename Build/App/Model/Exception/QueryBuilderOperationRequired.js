"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorInstance_1 = require("../../Exception/ErrorInstance");
class QueryBuilderOperationRequired extends ErrorInstance_1.default {
    constructor() {
        super();
    }
    getTitle() {
        return "Query Builder Operation Required Exception";
    }
    getMessage() {
        return `Query Builder requires a CRUD operation type.`;
    }
}
exports.default = QueryBuilderOperationRequired;
//# sourceMappingURL=QueryBuilderOperationRequired.js.map