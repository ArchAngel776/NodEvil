"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorInstance_1 = require("../../Exception/ErrorInstance");
class DatabaseProviderUnsupported extends ErrorInstance_1.default {
    constructor(engine) {
        super(engine);
    }
    getTitle() {
        return "Database Provider Unsupported Exception";
    }
    getMessage(engine) {
        return `Database engine "${engine}" is unsupported Database Provider.`;
    }
}
exports.default = DatabaseProviderUnsupported;
//# sourceMappingURL=DatabaseProviderUnsupported.js.map