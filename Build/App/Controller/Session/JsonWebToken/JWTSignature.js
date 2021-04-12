"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base64url_1 = require("base64url");
const crypto = require("crypto");
class JWTSignature {
    constructor() {
        this.signature = null;
    }
    load(signature) {
        this.signature = signature;
    }
    checkSignature(joseHeader, jwsPayload) {
        const joseHeaderString = JSON.stringify(joseHeader);
        const jwsPayloadString = JSON.stringify(jwsPayload);
        const joseHeaderBase64 = base64url_1.default(joseHeaderString);
        const jwsPayloadBase64 = base64url_1.default(jwsPayloadString);
        const signature = this.createSignature(joseHeaderBase64, jwsPayloadBase64);
        return signature === this.signature;
    }
    createSignature(joseHeaderHash, jwsPayloadHash) {
        const signature = crypto.createHmac("sha256", "abc").update(joseHeaderHash + "." + jwsPayloadHash).digest("hex");
        return signature;
    }
}
exports.default = JWTSignature;
//# sourceMappingURL=JWTSignature.js.map