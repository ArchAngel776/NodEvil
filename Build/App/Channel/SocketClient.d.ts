import * as WebSocket from "ws";
import Init from "../../Data/Interfaces/Init";
import { ChannelInstance } from "../../Data/Types/ChannelInstance";
import Channel from "../Channel";
import Session from "../Controller/Session";
export default class SocketClient implements Init {
    protected socket: WebSocket;
    protected session: Session;
    protected channel: Channel;
    constructor(socket: WebSocket, Channel: ChannelInstance, session: Session);
    init(): void;
    protected onSocketOpen(event: WebSocket.OpenEvent): void;
    protected onSocketMessage(event: WebSocket.MessageEvent): void;
    protected onSocketClose(event: WebSocket.CloseEvent): void;
    protected onSocketError(event: WebSocket.ErrorEvent): void;
}
//# sourceMappingURL=SocketClient.d.ts.map