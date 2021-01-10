"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ElementOfRouter {
    constructor(path, method, controller, action) {
        this.path = path;
        this.method = method;
        this.controller = controller;
        this.action = action;
    }
    getStructure() {
        const result = {
            path: this.path,
            method: this.method,
            controller: this.controller,
            action: this.action
        };
        return result;
    }
}
exports.default = ElementOfRouter;
