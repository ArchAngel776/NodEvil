import * as WebSocket from "ws";
import Init from "../../../Data/Interfaces/Init";
import { ChannelInstance } from "../../../Data/Types/ChannelInstance";
import Channel from "../../Channel";
export default class SocketClient implements Init {
    protected socket: WebSocket;
    protected channel: Channel;
    constructor(socket: WebSocket, Channel: ChannelInstance);
    init(): void;
    protected onSocketOpen(event: WebSocket.OpenEvent): void;
    protected onSocketMessage(event: WebSocket.MessageEvent): void;
    protected onSocketClose(event: WebSocket.CloseEvent): void;
    protected onSocketError(event: WebSocket.ErrorEvent): void;
}
//# sourceMappingURL=SocketClient.d.ts.map