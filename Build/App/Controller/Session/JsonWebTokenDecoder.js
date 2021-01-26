"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JOSEHeader_1 = require("./JsonWebToken/JOSEHeader");
const JWSPayload_1 = require("./JsonWebToken/JWSPayload");
const JWTSignature_1 = require("./JsonWebToken/JWTSignature");
class JsonWebTokenDecoder {
    constructor(token) {
        this.token = token;
        this.joseHeader = new JOSEHeader_1.default();
        this.jwsPayload = new JWSPayload_1.default();
        this.jwtSignature = new JWTSignature_1.default();
    }
    extractData() {
        const parts = this.token.split(".");
        if (parts.length !== 3) {
            return {};
        }
        this.joseHeader.loadHash(parts[0]);
        this.jwsPayload.loadHash(parts[1]);
        this.jwtSignature.load(parts[2]);
        const joseHeader = this.joseHeader.getHeader();
        const jwsPayload = this.jwsPayload.getPayload();
        if (joseHeader === null || jwsPayload === null || !this.jwtSignature.checkSignature(joseHeader, jwsPayload)) {
            return {};
        }
        return this.payloadToCookies(jwsPayload);
    }
    payloadToCookies(payload) {
        let result = {};
        for (const key in payload) {
            result[key] = payload[key].toString();
        }
        return result;
    }
}
exports.default = JsonWebTokenDecoder;
