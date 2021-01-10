import Controller from "../../App/Controller";
import { HttpMethod } from "../Types/HttpMethod";
export default interface RouterElement {
    path: string;
    method: HttpMethod;
    controller: typeof Controller;
    action: string;
}
//# sourceMappingURL=RouterElement.d.ts.map