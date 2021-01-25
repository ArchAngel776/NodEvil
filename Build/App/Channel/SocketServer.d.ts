/// <reference types="node" />
import Init from "../../Data/Interfaces/Init";
import { HttpPossibleCore } from "../../Data/Types/HttpPossibleCore";
import * as WebSocket from "ws";
import { IncomingMessage } from "http";
import Router from "../Router";
export default class SocketServer implements Init {
    protected wss: WebSocket.Server;
    protected router: Router;
    constructor(core: HttpPossibleCore);
    init(): void;
    addRouting(router: Router): SocketServer;
    protected routing(socket: WebSocket, socketRequest: IncomingMessage): void;
}
//# sourceMappingURL=SocketServer.d.ts.map