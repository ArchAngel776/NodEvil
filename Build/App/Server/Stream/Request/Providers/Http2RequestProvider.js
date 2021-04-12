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
const HttpMethod_1 = require("../../../../../Data/Statics/HttpMethod");
const HttpMethodUnsupported_1 = require("../../../Exception/HttpMethodUnsupported");
const Url_1 = require("../../../Tools/Url");
const RequestProvider_1 = require("../RequestProvider");
const BodyRequest_1 = require("../../../Tools/BodyRequest");
class Http2RequestProvider extends RequestProvider_1.default {
    constructor(core) {
        super();
        this.core = core;
    }
    getUrl() {
        const result = new Url_1.default(this.core.headers[":path"]).pure();
        return result;
    }
    getType() {
        switch (this.core.headers[":method"]) {
            case HttpMethod_1.HTTP_METHOD.Get:
                return HttpMethod_1.HTTP_METHOD.Get;
            case HttpMethod_1.HTTP_METHOD.Post:
                return HttpMethod_1.HTTP_METHOD.Post;
            default:
                throw new HttpMethodUnsupported_1.default(this.core.headers[":method"]);
        }
    }
    getHeaders() {
        const result = this.core.headers;
        return result;
    }
    getBody() {
        return __awaiter(this, void 0, void 0, function* () {
            switch (this.getType()) {
                case HttpMethod_1.HTTP_METHOD.Get:
                    return new Url_1.default(this.core.url).params();
                case HttpMethod_1.HTTP_METHOD.Post:
                    const contentType = this.core.headers["content-type"];
                    return yield new BodyRequest_1.default(this.core).getBody(contentType);
                default:
                    throw new HttpMethodUnsupported_1.default(this.getType());
            }
        });
    }
}
exports.default = Http2RequestProvider;
//# sourceMappingURL=Http2RequestProvider.js.map