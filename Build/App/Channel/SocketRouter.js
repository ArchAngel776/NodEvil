"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const String_1 = require("../../Data/Statics/String");
const Session_1 = require("../Controller/Session");
const Router_1 = require("../Router");
const SocketClient_1 = require("./SocketClient");
class SocketRouter {
    constructor(socket, request) {
        this.socket = socket;
        this.request = request;
        this.router = new Router_1.default();
    }
    init() {
        const channelElement = this.router.readChannel(this.request.getUrl());
        const client = new SocketClient_1.default(this.socket, channelElement.channel, new Session_1.default(this.request.getHeaders().cookie || String_1.STRING.EMPTY));
        client.init();
    }
    withMap(map) {
        this.router = map;
        return this;
    }
}
exports.default = SocketRouter;
//# sourceMappingURL=SocketRouter.js.map