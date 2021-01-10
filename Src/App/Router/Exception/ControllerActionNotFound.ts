export default class ControllerActionNotFound extends Error {

    public constructor(controllerName : string, controllerAction : string) {

        super();

        this.name = "Controller Not Found Exception";

        this.message = "Action \"" + controllerAction + "\" not found in controller " + controllerName + ".";

    }

}