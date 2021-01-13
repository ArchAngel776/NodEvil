"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebSocket = require("ws");
const ExceptionReader_1 = require("../../Exception/ExceptionReader");
const Request_1 = require("../Stream/Request");
const HttpVersion_1 = require("../../../Data/Statics/HttpVersion");
const SocketRouter_1 = require("./SocketRouter");
class SocketServer {
    constructor(core) {
        this.wss = new WebSocket.Server({ server: core });
    }
    init() {
        this.wss.on("connection", this.routing);
    }
    routing(socket, socketRequest) {
        try {
            const socketRouter = new SocketRouter_1.default(socket, new Request_1.default(HttpVersion_1.HTTP_VERSION.v1_1, socketRequest));
            socketRouter.init();
        }
        catch (errorInstance) {
            const exceptionReader = new ExceptionReader_1.default(errorInstance);
            exceptionReader.read();
        }
    }
}
exports.default = SocketServer;
