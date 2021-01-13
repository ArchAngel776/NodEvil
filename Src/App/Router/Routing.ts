import Request from "../Server/Stream/Request";
import Response from "../Server/Stream/Response";
import Router from "../Router";
import { HTTP_METHOD } from "../../Data/Statics/HttpMethod";
import { existsSync, lstatSync, readFileSync } from "fs";
import Mime from "./Tools/Mime";
import ControllerAction from "../../Data/Interfaces/ControllerAction";
import Session from "../Controller/Session";
import ControllerActionNotFound from "./Exception/ControllerActionNotFound";
import { STRING } from "../../Data/Statics/String";
import Init from "../../Data/Interfaces/Init";

export default class Routing implements Init {

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

            const controllerInstance = new Controller(new Session(this.request.getHeaders().cookie || STRING.EMPTY));

            if (!(routerElemet.action in controllerInstance && typeof Controller.prototype[routerElemet.action] === "function")) {

                throw new ControllerActionNotFound(Controller.name, routerElemet.action);

            }

            const viewResponse = await (<ControllerAction>Controller.prototype[routerElemet.action]).call(controllerInstance, await this.request.getParams());

            this.response.sendView(viewResponse);

        }

        catch (errorInstance) {

            throw errorInstance;

        }

    }

    protected findFile() : boolean {

        if (this.request.getType() === HTTP_METHOD.Get && existsSync(this.request.getUrl()) && lstatSync(this.request.getUrl()).isFile()) {

            this.response.sendFile(readFileSync(this.request.getUrl()), new Mime(this.request.getUrl()).getMime());

            return true;

        }

        return false;

    }

    protected notFound() : void {

        this.response.sendNotFound();

    }

}