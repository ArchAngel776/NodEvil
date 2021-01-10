import ViewResponse from "../../../Data/Structures/ViewResponse";
import Session from "../../Controller/Session";
import ViewType from "../ViewType";
export default class Data extends ViewType {
    protected data: any;
    constructor(session: Session, data: any);
    plain(): ViewResponse;
    xml(): ViewResponse;
    json(): ViewResponse;
}
//# sourceMappingURL=Data.d.ts.map