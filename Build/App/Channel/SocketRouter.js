"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router_1 = require("../Router");
const SocketClient_1 = require("./SocketClient");
class SocketRouter {
    constructor(socket, request) {
        this.socket = socket;
        this.request = request;
    }
    init() {
        const channelElement = Router_1.default.getInstance().readChannel(this.request.getUrl());
        const client = new SocketClient_1.default(this.socket, channelElement.channel);
        client.init();
    }
}
exports.default = SocketRouter;
