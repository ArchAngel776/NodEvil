import * as WebSocket from "ws";
import Session from "./Controller/Session";

export default abstract class Channel {

    protected socket : WebSocket;

    protected session : Session;

    public constructor(socket : WebSocket, session : Session) {

        this.socket = socket;

        this.session = session;

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