"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebSocket = require("ws");
const ExceptionReader_1 = require("../../Exception/ExceptionReader");
const Router_1 = require("../../Router");
const Request_1 = require("../Stream/Request");
const HttpVersion_1 = require("../../../Data/Statics/HttpVersion");
class SocketServer {
    constructor(core) {
        this.core = core;
        this.wss = null;
    }
    init() {
        this.wss = new WebSocket.Server({ server: this.core });
        this.wss.on("connection", this.routing);
    }
    routing(socket, request) {
        try {
            const req = new Request_1.default(HttpVersion_1.HTTP_VERSION.v1_1, request);
            const channelElement = Router_1.default.getInstance().readChannel(req.getUrl());
            const Channel = channelElement.channel;
            const channel = new Channel(socket);
        }
        catch (errorInstance) {
            const exceptionReader = new ExceptionReader_1.default(errorInstance);
            exceptionReader.read();
        }
    }
}
exports.default = SocketServer;
