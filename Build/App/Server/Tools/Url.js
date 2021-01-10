"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qs = require("querystring");
class Url {
    constructor(fullPath) {
        this.fullPath = fullPath;
    }
    pure() {
        const result = this.fullPath.split("?")[0];
        return result;
    }
    params() {
        const paramString = this.fullPath.split("?")[1];
        const result = JSON.parse(JSON.stringify(qs.parse(paramString)));
        return result;
    }
}
exports.default = Url;
