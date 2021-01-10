import { HttpMethod } from "../../../Data/Types/HttpMethod";

export default class RouterElementNotFound extends Error {

    public constructor(path : string, method : HttpMethod) {

        super();

        this.name = "Router Element Not Found Exception";

        this.message = "Path \"" + path + "\" was not found for " + method + " method.";

    }

}