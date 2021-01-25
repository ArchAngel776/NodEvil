"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cookies = require("cookie");
const Cookie_1 = require("./Session/Cookie");
const Generator_1 = require("./Session/Generator");
const Storage_1 = require("./Session/Storage");
class Session {
    constructor(cookies) {
        this.cookies = Storage_1.default.get(Cookies.parse(cookies).session || "");
    }
    has(key) {
        return this.cookies[key] !== undefined;
    }
    get(key) {
        return this.cookies[key];
    }
    set(key, value) {
        this.cookies[key] = value;
    }
    delete(key) {
        delete this.cookies[key];
    }
    flush() {
        return this.cookies;
    }
    save() {
        let sessionToken = new Generator_1.default(48).generate();
        while (!Storage_1.default.set(sessionToken, this.flush()))
            sessionToken = new Generator_1.default(48).generate();
        const result = new Cookie_1.default("session").Set(sessionToken).SameSite("Lax").HttpOnly().Secure().Extract();
        return result;
    }
}
exports.default = Session;
