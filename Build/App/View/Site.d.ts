import ViewResponse from "../../../Data/Structures/ViewResponse";
import Session from "../../Controller/Session";
export default class Site {
    protected session: Session;
    protected path: string;
    constructor(session: Session, path: string);
    show(): ViewResponse;
}
//# sourceMappingURL=Site.d.ts.map