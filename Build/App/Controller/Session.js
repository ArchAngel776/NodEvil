"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cookies = require("cookie");
const JsonWebTokenDecoder_1 = require("./Session/JsonWebTokenDecoder");
const JsonWebTokenEncoder_1 = require("./Session/JsonWebTokenEncoder");
class Session {
    constructor(cookies) {
        this.cookies = new JsonWebTokenDecoder_1.default(Cookies.parse(cookies).session || "").extractData();
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
    flushToken() {
        return new JsonWebTokenEncoder_1.default({ typ: "JWT", alg: "HS256" }).getToken(this.cookies);
    }
}
exports.default = Session;
//# sourceMappingURL=Session.js.map