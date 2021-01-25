"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const SslBasic_1 = require("./SslBasic");
class SslWithChain extends SslBasic_1.default {
    constructor(privKey, certPem, chain) {
        super(privKey, certPem);
        this.chain = fs_1.readFileSync(chain);
    }
    getObject() {
        return Object.assign(Object.assign({}, super.getObject()), { ca: this.chain });
    }
}
exports.default = SslWithChain;
