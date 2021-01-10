import ViewResponse from "../../Data/Structures/ViewResponse";
import Session from "../Controller/Session";
export default class Data {
    protected session: Session;
    protected data: any;
    constructor(session: Session, data: any);
    plain(): ViewResponse;
    xml(): ViewResponse;
    json(): ViewResponse;
}
//# sourceMappingURL=Data.d.ts.map