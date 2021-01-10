"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const HttpStatus_1 = require("../../Data/Statics/HttpStatus");
class Site {
    constructor(session, path) {
        this.session = session;
        this.path = path;
    }
    show() {
        const response = {
            status: HttpStatus_1.HTTP_STATUS.OK,
            headers: {
                "Content-type": "text/html",
                "Set-cookie": "session=" + this.session.flush() + "; Path=/; HttpOnly; Secure; SameSite=strict;"
            },
            content: fs_1.readFileSync(this.path)
        };
        return response;
    }
}
exports.default = Site;
