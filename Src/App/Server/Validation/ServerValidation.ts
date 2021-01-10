import ServerConfig from "../../../Data/Structures/ServerConfig";

export default abstract class ServerValidation {

    protected config : ServerConfig;

    public constructor(config : ServerConfig) {

        this.config = config;

    }

    public abstract validate() : void | never;

}