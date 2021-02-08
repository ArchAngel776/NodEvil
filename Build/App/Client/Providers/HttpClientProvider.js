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
const https = require("https");
const HttpMethod_1 = require("../../../Data/Statics/HttpMethod");
const Url_1 = require("../../Server/Tools/Url");
const ClientProvider_1 = require("../ClientProvider");
class HttpClientProvider extends ClientProvider_1.default {
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                const url = new Url_1.default(this.url);
                url.setParams(this.body);
                const options = {
                    method: HttpMethod_1.HTTP_METHOD.Get,
                    headers: this.headers
                };
                const httpRequest = https.request(url.full(), options, (req) => {
                    let dataString = "";
                    req.on("data", chunk => dataString += chunk);
                    req.on("end", () => resolve(dataString));
                });
                httpRequest.end();
            });
        });
    }
    post() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                const options = {
                    method: HttpMethod_1.HTTP_METHOD.Post,
                    headers: this.headers
                };
                const httpRequest = https.request(this.url, options, (req) => {
                    let dataString = "";
                    req.on("data", chunk => dataString += chunk);
                    req.on("end", () => resolve(dataString));
                });
                httpRequest.write(this.body);
                httpRequest.end();
            });
        });
    }
}
exports.default = HttpClientProvider;
