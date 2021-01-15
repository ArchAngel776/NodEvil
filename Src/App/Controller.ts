import ControllerAction from "../Data/Interfaces/ControllerAction";
import Init from "../Data/Interfaces/Init";
import ViewResponse from "../Data/Structures/ViewResponse";
import MiddlewareAuth from "./Controller/MiddlewareAuth";
import Session from "./Controller/Session";

export default abstract class Controller implements Init {

    protected session : Session;

    protected middlewareAuth : MiddlewareAuth;

    public constructor(session : Session) {

        this.session = session;

        this.middlewareAuth = new MiddlewareAuth();

    }

    public init() : void {}
    
}