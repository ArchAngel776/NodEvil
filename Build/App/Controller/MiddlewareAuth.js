"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MiddlewareAuth {
    constructor() {
        this.authorizations = [];
        this.excepted = [];
    }
    setAuthorization(...auths) {
        this.authorizations.push(...auths);
        return this;
    }
    except(...actions) {
        this.excepted.push(...actions);
        return this;
    }
}
exports.default = MiddlewareAuth;
//# sourceMappingURL=MiddlewareAuth.js.map