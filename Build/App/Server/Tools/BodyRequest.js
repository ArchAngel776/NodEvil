"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qs = require("querystring");
const HttpContentType_1 = require("../../../Data/Statics/HttpContentType");
class BodyRequest {
    constructor(requestCore) {
        this.requestCore = requestCore;
    }
    getBody(contentType) {
        return new Promise(resolve => {
            let dataString = "";
            this.requestCore.on("data", chunk => dataString += chunk);
            this.requestCore.on("end", () => resolve(this.getType(dataString, contentType)));
        });
    }
    getType(dataString, contentType) {
        switch (contentType) {
            case HttpContentType_1.HTTP_CONTENT_TYPE.JSON:
                return JSON.parse(dataString);
            default:
                return JSON.parse(JSON.stringify(qs.parse(dataString)));
        }
    }
}
exports.default = BodyRequest;
