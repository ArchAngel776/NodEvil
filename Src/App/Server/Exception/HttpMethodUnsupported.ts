import { HttpMethod } from "../../../Data/Types/HttpMethod";

export default class HttpMethodUnsupported extends Error {

    public constructor(method : HttpMethod) {

        super();

        this.name = "HTTP Method Unsupported Exception";

        this.message = "HTTP method: " + method + " is unsupported.";

    }

}