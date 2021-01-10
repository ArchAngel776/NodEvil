import Request from "../Server/Stream/Request";
import Response from "../Server/Stream/Response";
import Router from "../Router";
import { HTTP_METHOD } from "../../Data/Statics/HttpMethod";
import { existsSync, lstatSync, readFileSync } from "fs";
import Mime from "./Tools/Mime";
import ControllerAction from "../../Data/Interfaces/ControllerAction";
import Session from "../Controller/Session";
import ControllerActionNotFound from "./Exception/ControllerActionNotFound";

export default class Routing {

    protected request : Request;

    protected response : Response;

    public constructor(request : Request, response : Response) {

        this.request = request;

        this.response = response;

    }

    public async init() : Promise<void> {

        try {

            await this.findView();

        }

        catch (errorInstance) {

            if (!this.findFile()) {

                this.notFound();

                throw errorInstance;

            }

        }

    }

    protected async findView() : Promise<void> {

        try {

            const routerElemet = Router.getInstance().read(this.request.getUrl(), this.request.getType());

            const Controller = routerElemet.controller;

            const cookies = this.request.getHeaders().cookie || "";

            const session = new Session(cookies);

            const controllerInstance = new Controller(session);

            if (!(routerElemet.action in controllerInstance && typeof controllerInstance[routerElemet.action] === "function")) {

                throw new ControllerActionNotFound(Controller.name, routerElemet.action);

            }

            const action = controllerInstance[routerElemet.action] as ControllerAction;

            const viewResponse = await action.call(controllerInstance, await this.request.getParams());

            this.response.sendView(viewResponse);

        }

        catch (errorInstance) {

            throw errorInstance;

        }

    }

    protected findFile() : boolean {

        if (this.request.getType() === HTTP_METHOD.Get && existsSync(this.request.getUrl()) && lstatSync(this.request.getUrl()).isFile()) {

            const fileContent = readFileSync(this.request.getUrl());

            const mimeType = new Mime(this.request.getUrl()).getMime();

            this.response.sendFile(fileContent, mimeType);

            return true;

        }

        return false;

    }

    protected notFound() : void {

        this.response.sendNotFound();

    }

}