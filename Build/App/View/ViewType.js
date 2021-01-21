"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cookie_1 = require("../Controller/Session/Cookie");
const Generator_1 = require("../Controller/Session/Generator");
const Storage_1 = require("../Controller/Session/Storage");
class ViewType {
    constructor(session) {
        this.session = session;
    }
    withSession(viewResponse) {
        const sessionToken = new Generator_1.default(48).generate();
        let save = false;
        while (!save)
            save = Storage_1.default.set(sessionToken, this.session.flush());
        viewResponse.headers["Set-cookie"] = new Cookie_1.default("session").Set(sessionToken).SameSite("Lax").HttpOnly().Secure().Extract();
        return viewResponse;
    }
}
exports.default = ViewType;
