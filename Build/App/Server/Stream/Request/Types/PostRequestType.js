"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpMethod_1 = require("../../../../../Data/Statics/HttpMethod");
const RequestType_1 = require("../RequestType");
class PostRequestType extends RequestType_1.default {
    getUrl(url) {
        const result = url;
        return result;
    }
    getMethod() {
        return HttpMethod_1.HTTP_METHOD.Post;
    }
    getHeaders(headers) {
    }
    getData() {
    }
}
exports.default = PostRequestType;
