"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus_1 = require("../../../Data/Statics/HttpStatus");
const ViewType_1 = require("../ViewType");
class Data extends ViewType_1.default {
    constructor(session, data) {
        super(session);
        this.data = data;
    }
    plain() {
        const response = {
            status: HttpStatus_1.HTTP_STATUS.OK,
            headers: {
                "Content-type": "text/plain"
            },
            content: typeof this.data === "string" ? this.data : this.data.toString()
        };
        return this.withSession(response);
    }
    xml() {
        const response = {
            status: HttpStatus_1.HTTP_STATUS.OK,
            headers: {
                "Content-type": "text/xml"
            },
            content: this.data
        };
        return this.withSession(response);
    }
    json() {
        const response = {
            status: HttpStatus_1.HTTP_STATUS.OK,
            headers: {
                "Content-type": "application/json"
            },
            content: typeof this.data === "string" ? this.data : JSON.stringify(this.data)
        };
        return this.withSession(response);
    }
}
exports.default = Data;
