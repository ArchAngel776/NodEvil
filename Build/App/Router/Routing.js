"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Router_1 = require("../Router");
const HttpMethod_1 = require("../../Data/Statics/HttpMethod");
const fs_1 = require("fs");
const Mime_1 = require("./Tools/Mime");
const Session_1 = require("../Controller/Session");
const ControllerActionNotFound_1 = require("./Exception/ControllerActionNotFound");
class Routing {
    constructor(request, response) {
        this.request = request;
        this.response = response;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.findView();
            }
            catch (errorInstance) {
                if (!this.findFile()) {
                    this.notFound();
                    throw errorInstance;
                }
            }
        });
    }
    findView() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const routerElemet = Router_1.default.getInstance().read(this.request.getUrl(), this.request.getType());
                const Controller = routerElemet.controller;
                const cookies = this.request.getHeaders().cookie || "";
                const session = new Session_1.default(cookies);
                const controllerInstance = new Controller(session);
                if (!(routerElemet.action in controllerInstance && typeof controllerInstance[routerElemet.action] === "function")) {
                    throw new ControllerActionNotFound_1.default(Controller.name, routerElemet.action);
                }
                const action = controllerInstance[routerElemet.action];
                const viewResponse = yield action.call(controllerInstance, yield this.request.getParams());
                this.response.sendView(viewResponse);
            }
            catch (errorInstance) {
                throw errorInstance;
            }
        });
    }
    findFile() {
        if (this.request.getType() === HttpMethod_1.HTTP_METHOD.Get && fs_1.existsSync(this.request.getUrl()) && fs_1.lstatSync(this.request.getUrl()).isFile()) {
            const fileContent = fs_1.readFileSync(this.request.getUrl());
            const mimeType = new Mime_1.default(this.request.getUrl()).getMime();
            this.response.sendFile(fileContent, mimeType);
            return true;
        }
        return false;
    }
    notFound() {
        this.response.sendNotFound();
    }
}
exports.default = Routing;
