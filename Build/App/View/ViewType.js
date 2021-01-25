"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ViewType {
    constructor(session) {
        this.session = session;
    }
    withSession(viewResponse) {
        viewResponse.headers["Set-cookie"] = this.session.save();
        return viewResponse;
    }
}
exports.default = ViewType;
