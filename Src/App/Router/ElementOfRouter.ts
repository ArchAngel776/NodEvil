import RouterElement from "../../Data/Structures/RouterElement";
import { HttpMethod } from "../../Data/Types/HttpMethod";
import Controller from "../Controller";

export default class ElementOfRouter {

    protected path : string;

    protected method : HttpMethod;

    protected controller : typeof Controller;

    protected action : string;

    public constructor(path : string, method : HttpMethod, controller : typeof Controller, action : string) {

        this.path = path;

        this.method = method;

        this.controller = controller;

        this.action = action;

    }

    public getStructure() : RouterElement {

        const result : RouterElement = {
            path: this.path,
            method: this.method,
            controller: this.controller,
            action: this.action
        };

        return result;

    }

}