import { HttpPossibleCore } from "../../../Data/Types/HttpPossibleCore";
import SslStructure from "../../../Data/Structures/SslStructure";
import { HttpPossibleRequest } from "../../../Data/Types/HttpPossibleRequest";
import { HttpPossibleResponse } from "../../../Data/Types/HttpPossibleResponse";
import { HttpVersion } from "../../../Data/Types/HttpVersion";
import Router from "../../Router";
export default abstract class Core {
    protected core: HttpPossibleCore;
    protected version: HttpVersion;
    protected router: Router;
    constructor(version: HttpVersion, ssl?: SslStructure | undefined);
    protected abstract requestHandler(request: HttpPossibleRequest, response: HttpPossibleResponse): Promise<void>;
    protected abstract createSecured(ssl: SslStructure): HttpPossibleCore;
    protected abstract createUnsecured(): HttpPossibleCore;
    routing(router: Router): Core;
    listen(port: number): HttpPossibleCore;
}
//# sourceMappingURL=Core.d.ts.map