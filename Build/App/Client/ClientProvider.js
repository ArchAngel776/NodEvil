"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientProvider {
    constructor(url) {
        this.url = url;
        this.headers = {};
        this.body = {};
    }
    setUrl(url) {
        this.url = url;
    }
    setHeaders(headers) {
        this.headers = headers;
    }
    setBody(body) {
        this.body = body;
    }
}
exports.default = ClientProvider;
