import * as WebSocket from "ws";

export default abstract class Channel {

    protected socket : WebSocket;

    public constructor(socket : WebSocket) {

        this.socket = socket;

    }

} 