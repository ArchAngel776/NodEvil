"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class SslBasic {
    constructor(privKey, certPem) {
        this.privKey = fs_1.readFileSync(privKey);
        this.certPem = fs_1.readFileSync(certPem);
    }
    getObject() {
        return {
            key: this.privKey,
            cert: this.certPem
        };
    }
}
exports.default = SslBasic;
//# sourceMappingURL=SslBasic.js.map