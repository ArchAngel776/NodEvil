"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus_1 = require("../../Data/Statics/HttpStatus");
class Data {
    constructor(session, data) {
        this.session = session;
        this.data = data;
    }
    plain() {
        const response = {
            status: HttpStatus_1.HTTP_STATUS.OK,
            headers: {
                "Content-type": "text/plain",
                "Set-cookie": "session=" + this.session.flush() + "; Path=/; HttpOnly; Secure; SameSite=strict;"
            },
            content: this.data
        };
        return response;
    }
    xml() {
        const response = {
            status: HttpStatus_1.HTTP_STATUS.OK,
            headers: {
                "Content-type": "text/xml",
                "Set-cookie": "session=" + this.session.flush() + "; Path=/; HttpOnly; Secure; SameSite=strict;"
            },
            content: this.data
        };
        return response;
    }
    json() {
        const response = {
            status: HttpStatus_1.HTTP_STATUS.OK,
            headers: {
                "Content-type": "application/json",
                "Set-cookie": "session=" + this.session.flush() + "; Path=/; HttpOnly; Secure; SameSite=strict;"
            },
            content: this.data
        };
        return response;
    }
}
exports.default = Data;
