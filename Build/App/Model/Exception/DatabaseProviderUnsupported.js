"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DatabaseProviderUnsupported extends Error {
    constructor() {
        super();
        this.name = "Database Provider Unsupported Exception";
    }
}
exports.default = DatabaseProviderUnsupported;
