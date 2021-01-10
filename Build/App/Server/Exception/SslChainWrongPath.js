"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SslChainWrongPath extends Error {
    constructor(chainPath) {
        super();
        this.name = "SSL Chain Wrong Path Exception";
        this.message = "Path: " + chainPath + " is incorrect SSL chain path.";
    }
}
exports.default = SslChainWrongPath;
