import Init from "../../../Data/Interfaces/Init";
import { HttpPossibleCore } from "../../../Data/Types/HttpPossibleCore";
import * as WebSocket from "ws";
import { IncomingMessage, Server } from "http";
import ExceptionReader from "../../Exception/ExceptionReader";
import Router from "../../Router";
import Request from "../Stream/Request";
import { HTTP_VERSION } from "../../../Data/Statics/HttpVersion";


export default class SocketServer implements Init {

    protected core : HttpPossibleCore;

    protected wss : WebSocket.Server | null;

    public constructor(core : HttpPossibleCore) {

        this.core = core;

        this.wss = null;

    }

    public init() : void {

        this.wss = new WebSocket.Server({ server: this.core as Server });

        this.wss.on("connection", this.routing);

    }

    protected routing(socket : WebSocket, request : IncomingMessage) : void {

        try {

            const req = new Request(HTTP_VERSION.v1_1, request)

            const channelElement = Router.getInstance().readChannel(req.getUrl());

            const Channel = channelElement.channel;

            const channel = new Channel(socket);

        }

        catch (errorInstance) {

            const exceptionReader = new ExceptionReader(errorInstance);

            exceptionReader.read();

        }

    }

}