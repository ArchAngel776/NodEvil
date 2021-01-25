import * as WebSocket from "ws";
import SocketSession from "./Channel/SocketSession";

export default abstract class Channel {

    protected socket : WebSocket;

    protected session : SocketSession;

    public constructor(socket : WebSocket, session : SocketSession) {

        this.socket = socket;

        this.session = session;

    }

    protected sendJSON(data : object) : void {

        this.socket.send(JSON.stringify(data));

    }

    protected sendText(data : number | string) : void {

        this.socket.send(data.toString());

    }

    public abstract onOpen() : void;

    public abstract onMessage(message : string) : void;

    public abstract onClose(code : number, reason : string) : void;

    public abstract onError(message : string, error : Error) : void;

} 