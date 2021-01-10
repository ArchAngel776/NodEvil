"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class SslObject {
    constructor(sslConfig = undefined) {
        this.sslStructure = sslConfig ? this.createStructure(sslConfig) : undefined;
    }
    createStructure(sslConfig) {
        let result = {
            key: fs_1.readFileSync(sslConfig.privateKey),
            cert: fs_1.readFileSync(sslConfig.certificate)
        };
        if (sslConfig.chain) {
            result.ca = fs_1.readFileSync(sslConfig.chain);
        }
        return result;
    }
    flush() {
        return this.sslStructure;
    }
}
exports.default = SslObject;
