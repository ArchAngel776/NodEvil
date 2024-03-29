"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const String_1 = require("../../../Data/Statics/String");
class Cookie {
    constructor(name) {
        this.name = name;
        this.value = String_1.STRING.EMPTY;
        this.path = "/";
        this.expires = String_1.STRING.EMPTY;
        this.sameSite = "None";
        this.httpOnly = false;
        this.secure = false;
    }
    Set(value) {
        this.value = value;
        return this;
    }
    Expires(date) {
        this.expires = "Expires=" + date.toUTCString() + "; ";
        return this;
    }
    Path(path) {
        this.path = path;
        return this;
    }
    SameSite(sameSite) {
        this.sameSite = sameSite;
        return this;
    }
    HttpOnly() {
        this.httpOnly = true;
        return this;
    }
    Secure() {
        this.secure = true;
        return this;
    }
    Extract() {
        const result = `${this.name}=${this.value}; ${this.expires}Path=${this.path}; SameSite=${this.sameSite}; ${this.httpOnly ? "HttpOnly; " : String_1.STRING.EMPTY}${this.secure ? "Secure; " : String_1.STRING.EMPTY}`;
        return result;
    }
}
exports.default = Cookie;
//# sourceMappingURL=Cookie.js.map