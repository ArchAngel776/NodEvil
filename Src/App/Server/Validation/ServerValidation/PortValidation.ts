import ServerPortNumerable from "../../Exception/ServerPortNumerable";
import ServerPortRange from "../../Exception/ServerPortRange";
import ServerPortRequired from "../../Exception/ServerPortRequired";
import ServerValidation from "../ServerValidation";

export default class PortValidation extends ServerValidation {

    public validate() : void | never {

        if (this.config.port === undefined) {

            throw new ServerPortRequired();

        }

        else if (typeof this.config.port !== "number" && !/^[0-9]+$/gm.test(this.config.port)) {

            throw new ServerPortNumerable(this.config.port);

        }

        else if (this.config.port > 65535 || this.config.port < 1) {

            throw new ServerPortRange(this.config.port);

        }

    }

}