import Init from "../../Data/Interfaces/Init";
import { HttpPossibleCore } from "../../Data/Types/HttpPossibleCore";
import * as WebSocket from "ws";
import { IncomingMessage, Server } from "http";
import ExceptionReader from "../Exception/ExceptionReader";
import Request from "../Server/Stream/Request";
import { HTTP_VERSION } from "../../Data/Statics/HttpVersion";
import SocketRouter from "./SocketRouter";
import Router from "../Router";

export default class SocketServer implements Init {

    protected wss : WebSocket.Server;

    protected router : Router;

    public constructor(core : HttpPossibleCore) {

        this.wss = new WebSocket.Server({ server: core as Server });

        this.router = new Router();

    }

    public init() : void {

        this.wss.on("connection", this.routing.bind(this));

    }

    public addRouting(router : Router) : SocketServer {

        this.router = router;

        return this;

    }

    protected routing(socket : WebSocket, socketRequest : IncomingMessage) : void {

        try {

            const socketRouter = new SocketRouter(socket, new Request(HTTP_VERSION.v1_1, socketRequest))
                .withMap(this.router);

            socketRouter.init();

        }

        catch (errorInstance) {

            const exceptionReader = new ExceptionReader(errorInstance);

            exceptionReader.read();

        }

    }

}