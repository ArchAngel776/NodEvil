import HttpVersionRequried from "../../Exception/HttpVersionRequired";
import HttpVersionStringFormat from "../../Exception/HttpVersionStringFormat";
import HttpVersionUnsupported from "../../Exception/HttpVersionUnsupported";
import ServerValidation from "../ServerValidation";

export default class HttpVersionValidation extends ServerValidation {

    public validate() : void | never {

        if (this.config.httpVersion === undefined) {

            throw new HttpVersionRequried();

        }

        else if (typeof this.config.httpVersion !== "string") {

            throw new HttpVersionStringFormat();

        }

        else if (this.config.httpVersion !== "1.1" && this.config.httpVersion !== "2.0") {

            throw new HttpVersionUnsupported(this.config.httpVersion);

        }

    }

}