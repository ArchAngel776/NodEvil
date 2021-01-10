import RouterElement from "../Data/Structures/RouterElement";
import RouterStack from "../Data/Structures/RouterStack";
import { HttpMethod } from "../Data/Types/HttpMethod";
export default class Router {
    protected static instance: Router;
    protected stack: RouterStack;
    constructor();
    get(path: string, controller: any, action: string): void;
    post(path: string, controller: any, action: string): void;
    read(path: string, method: HttpMethod): RouterElement | never;
    static getInstance(): Router;
}
//# sourceMappingURL=Router.d.ts.map