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
const HttpVersion_1 = require("../../../Data/Statics/HttpVersion");
const HttpVersionUnsupported_1 = require("../Exception/HttpVersionUnsupported");
const Http2RequestProvider_1 = require("./Request/Providers/Http2RequestProvider");
const HttpRequestProvider_1 = require("./Request/Providers/HttpRequestProvider");
class Request {
    constructor(version, core) {
        this.provider = this.createProvider(version, core);
    }
    getUrl() {
        return this.provider.getUrl();
    }
    getType() {
        return this.provider.getType();
    }
    getHeaders() {
        return this.provider.getHeaders();
    }
    getParams() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.provider.getBody();
        });
    }
    createProvider(version, core) {
        switch (version) {
            case HttpVersion_1.HTTP_VERSION.v1_1:
                return new HttpRequestProvider_1.default(core);
            case HttpVersion_1.HTTP_VERSION.v2_0:
                return new Http2RequestProvider_1.default(core);
            default:
                throw new HttpVersionUnsupported_1.default(version);
        }
    }
}
exports.default = Request;
