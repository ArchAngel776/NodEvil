import ServerConfig from "../../../Data/Structures/ServerConfig";
export default abstract class ServerValidation {
    protected config: ServerConfig;
    constructor(config: ServerConfig);
    abstract validate(): void | never;
}
//# sourceMappingURL=ServerValidation.d.ts.map