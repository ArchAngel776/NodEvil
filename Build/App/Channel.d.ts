import * as WebSocket from "ws";
import Init from "../Data/Interfaces/Init";
export default abstract class Channel implements Init {
    protected socket: WebSocket;
    constructor(socket: WebSocket);
    init(): void;
    protected onSocketOpen(event: WebSocket.OpenEvent): void;
    protected onSocketMessage(event: WebSocket.MessageEvent): void;
    protected onSocketClose(event: WebSocket.CloseEvent): void;
    protected onSocketError(event: WebSocket.ErrorEvent): void;
    protected sendJSON(data: object): void;
    protected sendText(data: string): void;
    abstract onOpen(): void;
    abstract onMessage(message: string): void;
    abstract onClose(code: number, reason: string): void;
    abstract onError(message: string, error: Error): void;
}
//# sourceMappingURL=Channel.d.ts.map