import ControllerAction from "../Data/Interfaces/ControllerAction";
import Session from "./Controller/Session";

export default class Controller {

    protected session : Session;

    public constructor(session : Session) {

        this.session = session;

    }

    [ actionName : string ] : ControllerAction | Session;

}