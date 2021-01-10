import Session from "./Controller/Session";
import Data from "./View/Types/Data";
import Route from "./View/Types/Route";
import Site from "./View/Types/Site";
export default class View {
    protected session: Session;
    constructor(session: Session);
    site(path: string): Site;
    route(path: string): Route;
    data(data: any): Data;
}
//# sourceMappingURL=View.d.ts.map