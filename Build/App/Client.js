"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpVersion_1 = require("../Data/Statics/HttpVersion");
const String_1 = require("../Data/Statics/String");
const Http2ClientProvider_1 = require("./Client/Providers/Http2ClientProvider");
const HttpClientProvider_1 = require("./Client/Providers/HttpClientProvider");
const HttpVersionUnsupported_1 = require("./Server/Exception/HttpVersionUnsupported");
class Client {
    constructor(httpVersion, url = String_1.STRING.EMPTY) {
        this.httpVersion = httpVersion;
        this.provider = this.createProvider(url);
    }
    url(url) {
        this.provider.setUrl(url);
        return this;
    }
    headers(headers) {
        this.provider.setHeaders(headers);
        return this;
    }
    body(body) {
        this.provider.setBody(body);
        return this;
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.provider.get();
            return result;
        });
    }
    post() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.provider.post();
            return result;
        });
    }
    createProvider(url) {
        switch (this.httpVersion) {
            case HttpVersion_1.HTTP_VERSION.v1_1:
                return new HttpClientProvider_1.default(url);
            case HttpVersion_1.HTTP_VERSION.v2_0:
                return new Http2ClientProvider_1.default(url);
            default:
                throw new HttpVersionUnsupported_1.default(this.httpVersion);
        }
    }
}
exports.default = Client;
