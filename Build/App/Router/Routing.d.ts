import Request from "../Server/Stream/Request";
import Response from "../Server/Stream/Response";
import Init from "../../Data/Interfaces/Init";
export default class Routing implements Init {
    protected request: Request;
    protected response: Response;
    constructor(request: Request, response: Response);
    init(): Promise<void>;
    protected findView(): Promise<void>;
    protected findFile(): boolean;
    protected notFound(): void;
}
//# sourceMappingURL=Routing.d.ts.map