import { HttpPossibleCore } from "../../../Data/Types/HttpPossibleCore";
import SslStructure from "../../../Data/Structures/SslStructure";
import { HttpPossibleRequest } from "../../../Data/Types/HttpPossibleRequest";
import { HttpPossibleResponse } from "../../../Data/Types/HttpPossibleResponse";
import { HttpVersion } from "../../../Data/Types/HttpVersion";
export default abstract class Core {
    protected core: HttpPossibleCore;
    protected version: HttpVersion;
    constructor(version: HttpVersion, ssl?: SslStructure | undefined);
    protected abstract requestHandler(request: HttpPossibleRequest, response: HttpPossibleResponse): Promise<void>;
    protected abstract createSecured(ssl: SslStructure): HttpPossibleCore;
    protected abstract createUnsecured(): HttpPossibleCore;
    listen(port: number): void;
}
//# sourceMappingURL=Core.d.ts.map