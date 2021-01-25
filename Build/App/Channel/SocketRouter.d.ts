import * as WebSocket from "ws";
import Init from "../../Data/Interfaces/Init";
import Router from "../Router";
import Request from "../Server/Stream/Request";
export default class SocketRouter implements Init {
    protected router: Router;
    protected socket: WebSocket;
    protected request: Request;
    constructor(socket: WebSocket, request: Request);
    init(): void;
    withMap(map: Router): SocketRouter;
}
//# sourceMappingURL=SocketRouter.d.ts.map