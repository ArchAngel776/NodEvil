import Request from "../Server/Stream/Request";
import Response from "../Server/Stream/Response";
import Router from "../Router";
import Init from "../../Data/Interfaces/Init";
export default class Routing implements Init {
    protected request: Request;
    protected response: Response;
    protected router: Router;
    constructor(request: Request, response: Response);
    withMap(map: Router): Routing;
    init(): Promise<void>;
    protected findView(): Promise<void>;
    protected findFile(): boolean;
    protected notFound(): void;
}
//# sourceMappingURL=Routing.d.ts.map