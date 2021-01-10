"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ControllerActionNotFound extends Error {
    constructor(controllerName, controllerAction) {
        super();
        this.name = "Controller Not Found Exception";
        this.message = "Action \"" + controllerAction + "\" not found in controller " + controllerName + ".";
    }
}
exports.default = ControllerActionNotFound;
