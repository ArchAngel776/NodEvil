import ViewResponse from "../../../Data/Structures/ViewResponse";
import Session from "../../Controller/Session";
import ViewType from "../ViewType";
export default class Site extends ViewType {
    protected path: string;
    constructor(session: Session, path: string);
    show(): ViewResponse;
}
//# sourceMappingURL=Site.d.ts.map