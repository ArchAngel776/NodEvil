"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ViewType_1 = require("../ViewType");
class Route extends ViewType_1.default {
    constructor(session, path) {
        super(session);
        this.path = path;
    }
    redirect() {
        const response = {
            status: 301,
            headers: {
                "Location": this.path
            }
        };
        return this.withSession(response);
    }
}
exports.default = Route;
