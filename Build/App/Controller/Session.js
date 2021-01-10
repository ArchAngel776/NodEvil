"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cookie = require("cookie");
class Session {
    constructor(cookies) {
        this.cookies = JSON.parse(Cookie.parse(cookies).session || "{}");
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
        return JSON.stringify(this.cookies);
    }
}
exports.default = Session;
