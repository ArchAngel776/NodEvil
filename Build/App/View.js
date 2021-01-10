"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Data_1 = require("./View/Types/Data");
const Route_1 = require("./View/Types/Route");
const Site_1 = require("./View/Types/Site");
class View {
    constructor(session) {
        this.session = session;
    }
    site(path) {
        return new Site_1.default(this.session, path);
    }
    route(path) {
        return new Route_1.default(this.session, path);
    }
    data(data) {
        return new Data_1.default(this.session, data);
    }
}
exports.default = View;
