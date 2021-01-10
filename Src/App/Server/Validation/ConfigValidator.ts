import ServerConfig from "../../../Data/Structures/ServerConfig";
import HttpVersionValidation from "./ServerValidation/HttpVersionValidation";
import PortValidation from "./ServerValidation/PortValidation";
import SslValidation from "./ServerValidation/SslValidation";

export default class ConfigValidator {

    protected portValidation : PortValidation;

    protected httpVersionValidation : HttpVersionValidation;

    protected sslValidation : SslValidation;

    public constructor(config : ServerConfig) {

        this.portValidation = new PortValidation(config);

        this.httpVersionValidation = new HttpVersionValidation(config);

        this.sslValidation = new SslValidation(config);

    }

    public validate() : void | never {

        this.portValidation.validate();

        this.httpVersionValidation.validate();

        this.sslValidation.validate();

    }

}