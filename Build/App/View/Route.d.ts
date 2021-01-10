import ViewResponse from "../../Data/Structures/ViewResponse";
import Session from "../Controller/Session";
export default class Route {
    protected session: Session;
    protected path: string;
    constructor(session: Session, path: string);
    redirect(): ViewResponse;
}
//# sourceMappingURL=Route.d.ts.map