"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpMethod_1 = require("../../../../../Data/Statics/HttpMethod");
const RequestType_1 = require("../RequestType");
class GetRequestType extends RequestType_1.default {
    getUrl(url) {
        const segments = url.split("?");
        const result = segments[0];
        return result;
    }
    getMethod() {
        return HttpMethod_1.HTTP_METHOD.Get;
    }
    getHeaders(headers) {
    }
    getData() {
    }
}
exports.default = GetRequestType;
