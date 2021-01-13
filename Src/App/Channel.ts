import * as WebSocket from "ws";
import Init from "../Data/Interfaces/Init";

export default abstract class Channel implements Init {

    protected socket : WebSocket;

    public constructor(socket : WebSocket) {

        this.socket = socket;

    }

    public init() : void {

        this.socket.onopen = this.onSocketOpen.bind(this);

        this.socket.onmessage = this.onSocketMessage.bind(this);

        this.socket.onclose = this.onSocketClose.bind(this);

        this.socket.onerror = this.onSocketError.bind(this);

    }

    protected onSocketOpen(event : WebSocket.OpenEvent) : void {

        this.onOpen();

    }

    protected onSocketMessage(event : WebSocket.MessageEvent) : void {

        this.onMessage(event.data as string);

    }

    protected onSocketClose(event : WebSocket.CloseEvent) : void {

        this.onClose(event.code, event.reason);

    }

    protected onSocketError(event : WebSocket.ErrorEvent) : void {

        this.onError(event.message, event.error);

    }

    protected sendJSON(data : object) : void {

        this.socket.send(JSON.stringify(data));

    }

    protected sendText(data : string) : void {

        this.socket.send(data);

    }

    public abstract onOpen() : void;

    public abstract onMessage(message : string) : void;

    public abstract onClose(code : number, reason : string) : void;

    public abstract onError(message : string, error : Error) : void;

} 