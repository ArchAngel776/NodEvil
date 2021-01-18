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
const ClientProvider_1 = require("../ClientProvider");
const http2 = require("http2");
const Url_1 = require("../../Server/Tools/Url");
const HttpMethod_1 = require("../../../Data/Statics/HttpMethod");
class Http2ClientProvider extends ClientProvider_1.default {
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                const url = new Url_1.default(this.url);
                url.setParams(this.body);
                const headers = Object.assign({ ":path": url.path(), ":method": HttpMethod_1.HTTP_METHOD.Get }, this.headers);
                const client = http2.connect(url.domain());
                const req = client.request(headers);
                req.setEncoding("utf-8");
                let data = "";
                req.on("data", (chunk) => {
                    data += chunk;
                });
                req.on("end", () => {
                    client.close();
                    resolve(data);
                });
                req.end();
            });
        });
    }
    post() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                const url = new Url_1.default(this.url);
                const headers = Object.assign({ ":path": url.path(), ":method": HttpMethod_1.HTTP_METHOD.Post }, this.headers);
                const client = http2.connect(url.domain());
                const req = client.request(headers);
                req.setEncoding("utf-8");
                let data = "";
                req.on("data", (chunk) => {
                    data += chunk;
                });
                req.on("end", () => {
                    client.close();
                    resolve(data);
                });
                req.write(this.body);
                req.end();
            });
        });
    }
}
exports.default = Http2ClientProvider;
