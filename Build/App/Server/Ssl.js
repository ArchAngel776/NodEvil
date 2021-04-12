"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SslWithChain_1 = require("./Ssl/SslWithChain");
const SslBasic_1 = require("./Ssl/SslBasic");
class Ssl {
    constructor(sslConfig = undefined) {
        this.sslStructure = sslConfig ? this.createStructure(sslConfig) : undefined;
    }
    createStructure(sslConfig) {
        return sslConfig.chain ?
            new SslWithChain_1.default(sslConfig.privateKey, sslConfig.certificate, sslConfig.chain).getObject() :
            new SslBasic_1.default(sslConfig.privateKey, sslConfig.certificate).getObject();
    }
    flush() {
        return this.sslStructure;
    }
}
exports.default = Ssl;
//# sourceMappingURL=Ssl.js.map