import ViewResponse from "../../../Data/Structures/ViewResponse";
import Session from "../../Controller/Session";
import ViewType from "../ViewType";
export default class Route extends ViewType {
    protected path: string;
    constructor(session: Session, path: string);
    redirect(): ViewResponse;
}
//# sourceMappingURL=Route.d.ts.map