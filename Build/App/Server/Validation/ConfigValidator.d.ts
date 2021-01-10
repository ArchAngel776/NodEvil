import ServerConfig from "../../../Data/Structures/ServerConfig";
import HttpVersionValidation from "./ServerValidation/HttpVersionValidation";
import PortValidation from "./ServerValidation/PortValidation";
import SslValidation from "./ServerValidation/SslValidation";
export default class ConfigValidator {
    protected portValidation: PortValidation;
    protected httpVersionValidation: HttpVersionValidation;
    protected sslValidation: SslValidation;
    constructor(config: ServerConfig);
    validate(): void | never;
}
//# sourceMappingURL=ConfigValidator.d.ts.map