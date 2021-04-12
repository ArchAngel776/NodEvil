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
const String_1 = require("../../Data/Statics/String");
class Routing {
    constructor(request, response) {
        this.request = request;
        this.response = response;
        this.router = new Router_1.default();
    }
    withMap(map) {
        this.router = map;
        return this;
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
                const routerElemet = this.router.read(this.request.getUrl(), this.request.getType());
                const Controller = routerElemet.controller;
                const controllerInstance = new Controller(new Session_1.default(this.request.getHeaders().cookie || String_1.STRING.EMPTY));
                if (!(routerElemet.action in controllerInstance && typeof Controller.prototype[routerElemet.action] === "function")) {
                    throw new ControllerActionNotFound_1.default(Controller.name, routerElemet.action);
                }
                const viewResponse = yield Controller.prototype[routerElemet.action].call(controllerInstance, yield this.request.getParams());
                this.response.sendView(viewResponse);
            }
            catch (errorInstance) {
                throw errorInstance;
            }
        });
    }
    findFile() {
        if (this.request.getType() === HttpMethod_1.HTTP_METHOD.Get && fs_1.existsSync(this.request.getUrl()) && fs_1.lstatSync(this.request.getUrl()).isFile()) {
            this.response.sendFile(fs_1.readFileSync(this.request.getUrl()), new Mime_1.default(this.request.getUrl()).getMime());
            return true;
        }
        return false;
    }
    notFound() {
        this.response.sendNotFound();
    }
}
exports.default = Routing;
//# sourceMappingURL=Routing.js.map