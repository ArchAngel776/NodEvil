import ControllerAction from "../Data/Interfaces/ControllerAction";
import Session from "./Controller/Session";
export default class Controller {
    protected session: Session;
    constructor(session: Session);
    [actionName: string]: ControllerAction | Session;
}
//# sourceMappingURL=Controller.d.ts.map