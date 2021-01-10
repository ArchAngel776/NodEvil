import ViewResponse from "../../Data/Structures/ViewResponse";
import Session from "../Controller/Session";
export default abstract class ViewType {
    protected session: Session;
    constructor(session: Session);
    protected withSession(viewResponse: ViewResponse): ViewResponse;
}
//# sourceMappingURL=ViewType.d.ts.map