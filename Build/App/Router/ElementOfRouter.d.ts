import RouterElement from "../../Data/Structures/RouterElement";
import { HttpMethod } from "../../Data/Types/HttpMethod";
import Controller from "../Controller";
export default class ElementOfRouter {
    protected path: string;
    protected method: HttpMethod;
    protected controller: typeof Controller;
    protected action: string;
    constructor(path: string, method: HttpMethod, controller: typeof Controller, action: string);
    getStructure(): RouterElement;
}
//# sourceMappingURL=ElementOfRouter.d.ts.map