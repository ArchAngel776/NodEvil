"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorInstance_1 = require("../../Exception/ErrorInstance");
class QueryBuilderUndefined extends ErrorInstance_1.default {
    constructor() {
        super();
    }
    getTitle() {
        return "Query Builder Undefined Exception";
    }
    getMessage() {
        return `Database provider requires own Query Builder.`;
    }
}
exports.default = QueryBuilderUndefined;
//# sourceMappingURL=QueryBuilderUndefined.js.map