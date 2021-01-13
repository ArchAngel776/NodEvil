import * as WebSocket from "ws";

export default abstract class Channel {

    protected socket : WebSocket;

    public constructor(socket : WebSocket) {

        this.socket = socket;

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