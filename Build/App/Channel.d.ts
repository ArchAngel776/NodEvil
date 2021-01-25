import * as WebSocket from "ws";
import SocketSession from "./Channel/SocketSession";
export default abstract class Channel {
    protected socket: WebSocket;
    protected session: SocketSession;
    constructor(socket: WebSocket, session: SocketSession);
    protected sendJSON(data: object): void;
    protected sendText(data: number | string): void;
    abstract onOpen(): void;
    abstract onMessage(message: string): void;
    abstract onClose(code: number, reason: string): void;
    abstract onError(message: string, error: Error): void;
}
//# sourceMappingURL=Channel.d.ts.map