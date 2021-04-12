"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RouterElementNotFound extends Error {
    constructor(path, method) {
        super();
        this.name = "Router Element Not Found Exception";
        this.message = "Path \"" + path + "\" was not found for " + method + " method.";
    }
}
exports.default = RouterElementNotFound;
//# sourceMappingURL=RouterElementNotFound.js.map