import RouterElement from "../../Data/Structures/RouterElement";
import { ControllerInstance } from "../../Data/Types/ControllerInstance";
import { HttpMethod } from "../../Data/Types/HttpMethod";
export default class ElementOfRouter {
    protected path: string;
    protected method: HttpMethod;
    protected controller: ControllerInstance;
    protected action: string;
    constructor(path: string, method: HttpMethod, controller: ControllerInstance, action: string);
    getStructure(): RouterElement;
}
//# sourceMappingURL=ElementOfRouter.d.ts.map