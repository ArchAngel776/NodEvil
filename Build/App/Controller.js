"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MiddlewareAuth_1 = require("./Controller/MiddlewareAuth");
class Controller {
    constructor(session) {
        this.session = session;
        this.middlewareAuth = new MiddlewareAuth_1.default();
    }
    init() { }
}
exports.default = Controller;
//# sourceMappingURL=Controller.js.map