"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const HttpStatus_1 = require("../../../Data/Statics/HttpStatus");
const ViewType_1 = require("../ViewType");
class Site extends ViewType_1.default {
    constructor(session, path) {
        super(session);
        this.path = path;
    }
    show() {
        const response = {
            status: HttpStatus_1.HTTP_STATUS.OK,
            headers: {
                "Content-type": "text/html"
            },
            content: fs_1.readFileSync(this.path)
        };
        return this.withSession(response);
    }
}
exports.default = Site;
