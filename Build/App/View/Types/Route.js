"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus_1 = require("../../../Data/Statics/HttpStatus");
const ViewType_1 = require("../ViewType");
class Route extends ViewType_1.default {
    constructor(session, path) {
        super(session);
        this.path = path;
    }
    redirect() {
        const response = {
            status: HttpStatus_1.HTTP_STATUS.REDIRECT,
            headers: {
                "Location": this.path
            }
        };
        return this.withSession(response);
    }
}
exports.default = Route;
//# sourceMappingURL=Route.js.map