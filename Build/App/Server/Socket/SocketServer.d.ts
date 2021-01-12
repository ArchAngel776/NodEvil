/// <reference types="node" />
import Init from "../../../Data/Interfaces/Init";
import { HttpPossibleCore } from "../../../Data/Types/HttpPossibleCore";
import * as WebSocket from "ws";
import { IncomingMessage } from "http";
export default class SocketServer implements Init {
    protected core: HttpPossibleCore;
    protected wss: WebSocket.Server | null;
    constructor(core: HttpPossibleCore);
    init(): void;
    protected routing(socket: WebSocket, request: IncomingMessage): void;
}
//# sourceMappingURL=SocketServer.d.ts.map