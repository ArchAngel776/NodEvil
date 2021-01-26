"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base64url_1 = require("base64url");
class JOSEHeader {
    constructor() {
        this.header = null;
        this.hash = null;
    }
    loadHeader(header) {
        try {
            const jsonString = JSON.stringify(header);
            this.hash = base64url_1.default.encode(jsonString);
            this.header = header;
        }
        catch (_a) {
            this.hash = null;
            this.header = null;
        }
    }
    loadHash(hash) {
        try {
            const jsonString = base64url_1.default.decode(hash);
            this.header = JSON.parse(jsonString);
            this.hash = hash;
        }
        catch (_a) {
            this.header = null;
            this.hash = null;
        }
    }
    getHeader() {
        return this.header;
    }
    getHash() {
        return this.hash;
    }
}
exports.default = JOSEHeader;
