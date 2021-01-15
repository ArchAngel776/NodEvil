import Init from "../Data/Interfaces/Init";
import MiddlewareAuth from "./Controller/MiddlewareAuth";
import Session from "./Controller/Session";
export default abstract class Controller implements Init {
    protected session: Session;
    protected middlewareAuth: MiddlewareAuth;
    constructor(session: Session);
    init(): void;
}
//# sourceMappingURL=Controller.d.ts.map