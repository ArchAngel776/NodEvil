import * as WebSocket from "ws";
import Init from "../../../Data/Interfaces/Init";
import Router from "../../Router";
import Request from "../Stream/Request";

export default class SocketRouter implements Init {

    protected socket : WebSocket;

    protected request : Request;

    public constructor(socket : WebSocket, request : Request) {

        this.socket = socket;

        this.request = request;

    }

    public init() : void {

        const channelElement = Router.getInstance().readChannel(this.request.getUrl());

        const Channel = channelElement.channel;

        const channel = new Channel(this.socket);

        channel.init();

    }

}