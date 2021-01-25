import Init from "../Data/Interfaces/Init";
import ServerConfig from "../Data/Structures/ServerConfig";
import { HttpVersion } from "../Data/Types/HttpVersion";
import Core from "./Server/Foundations/Core";
import ConfigValidator from "./Server/Validation/ConfigValidator";
import Router from "./Router";
export default class Server implements Init {
    protected config: ServerConfig;
    protected router: Router;
    protected validator: ConfigValidator;
    constructor(config: ServerConfig);
    init(): void;
    withRouter(router: Router): Server;
    protected getCore(httpVersion: HttpVersion): Core | never;
}
//# sourceMappingURL=Server.d.ts.map