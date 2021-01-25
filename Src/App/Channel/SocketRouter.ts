import * as WebSocket from "ws";
import Init from "../../Data/Interfaces/Init";
import { STRING } from "../../Data/Statics/String";
import Session from "../Controller/Session";
import Router from "../Router";
import Request from "../Server/Stream/Request";
import SocketClient from "./SocketClient";

export default class SocketRouter implements Init {

    protected router : Router;

    protected socket : WebSocket;

    protected request : Request;

    public constructor(socket : WebSocket, request : Request) {

        this.socket = socket;

        this.request = request;

        this.router = new Router();

    }

    public init() : void {

        const channelElement = this.router.readChannel(this.request.getUrl());

        const client = new SocketClient(this.socket, channelElement.channel, new Session(this.request.getHeaders().cookie || STRING.EMPTY));

        client.init();

    }

    public withMap(map : Router) : SocketRouter {

        this.router = map;

        return this;

    }

}