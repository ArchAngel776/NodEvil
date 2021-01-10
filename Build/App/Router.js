"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpMethod_1 = require("../Data/Statics/HttpMethod");
const ElementOfRouter_1 = require("./Router/ElementOfRouter");
const RouterElementNotFound_1 = require("./Router/Exception/RouterElementNotFound");
class Router {
    constructor() {
        this.stack = [];
    }
    get(path, controller, action) {
        const element = new ElementOfRouter_1.default(path, HttpMethod_1.HTTP_METHOD.Get, controller, action);
        this.stack.push(element.getStructure());
    }
    post(path, controller, action) {
        const element = new ElementOfRouter_1.default(path, HttpMethod_1.HTTP_METHOD.Post, controller, action);
        this.stack.push(element.getStructure());
    }
    read(path, method) {
        for (const routerElement of this.stack) {
            if (routerElement.path === path && routerElement.method === method) {
                return routerElement;
            }
        }
        throw new RouterElementNotFound_1.default(path, method);
    }
    static getInstance() {
        if (Router.instance === undefined) {
            Router.instance = new Router();
        }
        return Router.instance;
    }
}
exports.default = Router;
