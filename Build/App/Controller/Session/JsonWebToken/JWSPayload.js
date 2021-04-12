"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base64url_1 = require("base64url");
class JWSPayload {
    constructor() {
        this.payload = null;
        this.hash = null;
    }
    loadPayload(payload) {
        try {
            const jsonString = JSON.stringify(payload);
            this.hash = base64url_1.default.encode(jsonString);
            this.payload = payload;
        }
        catch (_a) {
            this.hash = null;
            this.payload = null;
        }
    }
    loadHash(hash) {
        try {
            const jsonString = base64url_1.default.decode(hash);
            this.payload = JSON.parse(jsonString);
            this.hash = hash;
        }
        catch (_a) {
            this.payload = null;
            this.hash = null;
        }
    }
    getPayload() {
        return this.payload;
    }
    getHash() {
        return this.hash;
    }
}
exports.default = JWSPayload;
//# sourceMappingURL=JWSPayload.js.map