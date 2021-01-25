"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebSocket = require("ws");
const ExceptionReader_1 = require("../Exception/ExceptionReader");
const Request_1 = require("../Server/Stream/Request");
const HttpVersion_1 = require("../../Data/Statics/HttpVersion");
const SocketRouter_1 = require("./SocketRouter");
const Router_1 = require("../Router");
class SocketServer {
    constructor(core) {
        this.wss = new WebSocket.Server({ server: core });
        this.router = new Router_1.default();
    }
    init() {
        this.wss.on("connection", this.routing.bind(this));
    }
    addRouting(router) {
        this.router = router;
        return this;
    }
    routing(socket, socketRequest) {
        try {
            const socketRouter = new SocketRouter_1.default(socket, new Request_1.default(HttpVersion_1.HTTP_VERSION.v1_1, socketRequest))
                .withMap(this.router);
            socketRouter.init();
        }
        catch (errorInstance) {
            const exceptionReader = new ExceptionReader_1.default(errorInstance);
            exceptionReader.read();
        }
    }
}
exports.default = SocketServer;
