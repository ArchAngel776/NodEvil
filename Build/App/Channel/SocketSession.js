"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cookies = require("cookie");
const Storage_1 = require("../Controller/Session/Storage");
class SocketSession {
    constructor(cookies) {
        this.cookies = Storage_1.default.getForSocket(Cookies.parse(cookies).session || "");
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
}
exports.default = SocketSession;
