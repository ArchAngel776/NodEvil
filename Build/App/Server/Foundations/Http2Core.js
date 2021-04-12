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
const http2 = require("http2");
const HttpVersion_1 = require("../../../Data/Statics/HttpVersion");
const ExceptionReader_1 = require("../../Exception/ExceptionReader");
const Routing_1 = require("../../Router/Routing");
const Request_1 = require("../Stream/Request");
const Response_1 = require("../Stream/Response");
const Core_1 = require("./Core");
class Http2Core extends Core_1.default {
    requestHandler(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const routing = new Routing_1.default(new Request_1.default(HttpVersion_1.HTTP_VERSION.v2_0, request), new Response_1.default(HttpVersion_1.HTTP_VERSION.v2_0, response))
                    .withMap(this.router);
                yield routing.init();
            }
            catch (errorInstance) {
                const exceptionReader = new ExceptionReader_1.default(errorInstance);
                exceptionReader.read();
            }
        });
    }
    createSecured(ssl) {
        return http2.createSecureServer(Object.assign(Object.assign({}, ssl), { allowHTTP1: true }), this.requestHandler.bind(this));
    }
    createUnsecured() {
        return http2.createServer(this.requestHandler.bind(this));
    }
}
exports.default = Http2Core;
//# sourceMappingURL=Http2Core.js.map