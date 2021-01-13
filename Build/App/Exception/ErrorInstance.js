"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorInstance extends Error {
    constructor(...args) {
        super();
        this.args = args;
        this.init();
    }
    init() {
        this.name = this.getTitle();
        this.message = this.getMessage(...this.args);
    }
}
exports.default = ErrorInstance;
