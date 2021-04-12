"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const String_1 = require("../../../Data/Statics/String");
const JOSEHeader_1 = require("./JsonWebToken/JOSEHeader");
const JWSPayload_1 = require("./JsonWebToken/JWSPayload");
const JWTSignature_1 = require("./JsonWebToken/JWTSignature");
class JsonWebTokenEncoder {
    constructor(header) {
        this.header = header;
        this.joseHeader = new JOSEHeader_1.default();
        this.jwsPayload = new JWSPayload_1.default();
        this.jwtSignature = new JWTSignature_1.default();
    }
    getToken(payload) {
        this.joseHeader.loadHeader(this.header);
        this.jwsPayload.loadPayload(payload);
        const headerHash = this.joseHeader.getHash();
        const payloadHash = this.jwsPayload.getHash();
        if (headerHash === null || payloadHash === null) {
            return String_1.STRING.EMPTY;
        }
        return `${headerHash}.${payloadHash}.${this.jwtSignature.createSignature(headerHash, payloadHash)}`;
    }
}
exports.default = JsonWebTokenEncoder;
//# sourceMappingURL=JsonWebTokenEncoder.js.map