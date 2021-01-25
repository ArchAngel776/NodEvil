import * as WebSocket from "ws";
import Init from "../../Data/Interfaces/Init";
import { ChannelInstance } from "../../Data/Types/ChannelInstance";
import Channel from "../Channel";
import SocketSession from "./SocketSession";

export default class SocketClient implements Init {

    protected socket : WebSocket;

    protected session : SocketSession;

    protected channel : Channel;

    public constructor(socket : WebSocket, Channel : ChannelInstance, session : SocketSession) {

        this.socket = socket;

        this.session = session;

        this.channel = new Channel(this.socket, this.session);

    }

    public init() : void {

        this.socket.onopen = this.onSocketOpen.bind(this);

        this.socket.onmessage = this.onSocketMessage.bind(this);

        this.socket.onclose = this.onSocketClose.bind(this);

        this.socket.onerror = this.onSocketError.bind(this);

    }

    protected onSocketOpen(event : WebSocket.OpenEvent) : void {

        this.channel.onOpen();

    }

    protected onSocketMessage(event : WebSocket.MessageEvent) : void {

        this.channel.onMessage(<string> event.data);

    }

    protected onSocketClose(event : WebSocket.CloseEvent) : void {

        this.channel.onClose(event.code, event.reason);

    }

    protected onSocketError(event : WebSocket.ErrorEvent) : void {

        this.channel.onError(event.message, event.error);

    }

}