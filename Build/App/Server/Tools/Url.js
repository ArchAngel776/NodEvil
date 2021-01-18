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
    setParams(params) {
        const segments = [];
        for (const key in params)
            segments.push(`${key}=${params[key]}`);
        this.fullPath = this.pure() + "?" + segments.join("&");
    }
    full() {
        return this.fullPath;
    }
    domain() {
        const segments = this.fullPath.split("/");
        const domainSegments = segments.splice(0, 3);
        const result = domainSegments.join("/");
        return result;
    }
    path() {
        const segments = this.fullPath.split("/");
        const pathSegments = segments.splice(3, segments.length - 3);
        const result = "/" + pathSegments.join("/");
        return result;
    }
}
exports.default = Url;
