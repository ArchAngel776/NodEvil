"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router_1 = require("../../Router");
class Core {
    constructor(version, ssl = undefined) {
        this.core = ssl ? this.createSecured(ssl) : this.createUnsecured();
        this.version = version;
        this.router = new Router_1.default();
    }
    routing(router) {
        this.router = router;
        return this;
    }
    listen(port) {
        this.core.listen(port, () => console.log(`Server started at ${port} port.`));
        return this.core;
    }
}
exports.default = Core;
//# sourceMappingURL=Core.js.map