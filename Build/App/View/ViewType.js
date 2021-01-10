"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ViewType {
    constructor(session) {
        this.session = session;
    }
    withSession(viewResponse) {
        viewResponse.headers["Set-cookie"] = "session=" + this.session.flush() + "; Path=/; HttpOnly; Secure; SameSite=strict;";
        return viewResponse;
    }
}
exports.default = ViewType;
