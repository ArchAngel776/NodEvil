import * as WebSocket from "ws";
import Init from "../../../Data/Interfaces/Init";
import Request from "../Stream/Request";
export default class SocketRouter implements Init {
    protected socket: WebSocket;
    protected request: Request;
    constructor(socket: WebSocket, request: Request);
    init(): void;
}
//# sourceMappingURL=SocketRouter.d.ts.map