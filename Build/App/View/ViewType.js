"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cookie_1 = require("../Controller/Session/Cookie");
class ViewType {
    constructor(session) {
        this.session = session;
    }
    withSession(viewResponse) {
        viewResponse.headers["Set-cookie"] = new Cookie_1.default("session")
            .Set(this.session.flushToken())
            .Path("/")
            .SameSite("Lax")
            .HttpOnly()
            .Secure()
            .Extract();
        return viewResponse;
    }
}
exports.default = ViewType;
//# sourceMappingURL=ViewType.js.map