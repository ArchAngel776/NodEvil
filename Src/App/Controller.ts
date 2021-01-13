import ControllerAction from "../Data/Interfaces/ControllerAction";
import ViewResponse from "../Data/Structures/ViewResponse";
import Session from "./Controller/Session";

export default abstract class Controller {

    protected session : Session;

    public constructor(session : Session) {

        this.session = session;

    }

    

    

}