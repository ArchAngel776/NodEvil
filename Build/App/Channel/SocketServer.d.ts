/// <reference types="node" />
import Init from "../../Data/Interfaces/Init";
import { HttpPossibleCore } from "../../Data/Types/HttpPossibleCore";
import * as WebSocket from "ws";
import { IncomingMessage } from "http";
export default class SocketServer implements Init {
    protected wss: WebSocket.Server;
    constructor(core: HttpPossibleCore);
    init(): void;
    protected routing(socket: WebSocket, socketRequest: IncomingMessage): void;
}
//# sourceMappingURL=SocketServer.d.ts.map