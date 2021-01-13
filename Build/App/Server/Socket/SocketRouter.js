"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router_1 = require("../../Router");
class SocketRouter {
    constructor(socket, request) {
        this.socket = socket;
        this.request = request;
    }
    init() {
        const channelElement = Router_1.default.getInstance().readChannel(this.request.getUrl());
        const Channel = channelElement.channel;
        const channel = new Channel(this.socket);
        channel.init();
    }
}
exports.default = SocketRouter;
