import { HTTP_METHOD } from "../Data/Statics/HttpMethod";
import RouterElement from "../Data/Structures/RouterElement";
import RouterStack from "../Data/Structures/RouterStack";
import { HttpMethod } from "../Data/Types/HttpMethod";
import ElementOfRouter from "./Router/ElementOfRouter";
import RouterElementNotFound from "./Router/Exception/RouterElementNotFound";

export default class Router {

    protected static instance : Router;

    protected stack : RouterStack;

    public constructor() {

        this.stack = [];

    }

    public get(path : string, controller : any, action : string) : void {

        const element = new ElementOfRouter(path, HTTP_METHOD.Get, controller, action);

        this.stack.push(element.getStructure());

    }

    public post(path : string, controller : any, action : string) : void {

        const element = new ElementOfRouter(path, HTTP_METHOD.Post, controller, action);

        this.stack.push(element.getStructure());

    }

    public read(path : string, method : HttpMethod) : RouterElement | never {

        for (const routerElement of this.stack) {

            if (routerElement.path === path && routerElement.method === method) {

                return routerElement;

            }

        }

        throw new RouterElementNotFound(path, method);

    }

    public static getInstance() : Router {

        if (Router.instance === undefined) {

            Router.instance = new Router();

        }

        return Router.instance;

    }

}