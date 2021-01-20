"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cookie = require("cookie");
const Storage_1 = require("./Session/Storage");
class Session {
    constructor(cookies) {
        this.cookies = Storage_1.default.get(Cookie.parse(cookies).session || "");
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
}
exports.default = Session;
