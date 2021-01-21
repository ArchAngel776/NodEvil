import * as WebSocket from "ws";
import Session from "./Controller/Session";
export default abstract class Channel {
    protected socket: WebSocket;
    protected session: Session;
    constructor(socket: WebSocket, session: Session);
    protected sendJSON(data: object): void;
    protected sendText(data: string): void;
    abstract onOpen(): void;
    abstract onMessage(message: string): void;
    abstract onClose(code: number, reason: string): void;
    abstract onError(message: string, error: Error): void;
}
//# sourceMappingURL=Channel.d.ts.map