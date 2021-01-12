"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Core {
    constructor(version, ssl = undefined) {
        this.core = ssl ? this.createSecured(ssl) : this.createUnsecured();
        this.version = version;
    }
    listen(port) {
        this.core.listen(port, () => console.log(`Server started at ${port} port.`));
        return this.core;
    }
}
exports.default = Core;
