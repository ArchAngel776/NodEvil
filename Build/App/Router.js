"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpMethod_1 = require("../Data/Statics/HttpMethod");
const ElementOfRouter_1 = require("./Router/ElementOfRouter");
const ChannelElementNotFound_1 = require("./Router/Exception/ChannelElementNotFound");
const RouterElementNotFound_1 = require("./Router/Exception/RouterElementNotFound");
const RouterChannel_1 = require("./Router/RouterChannel");
class Router {
    constructor() {
        this.stack = [];
        this.channelsStack = [];
    }
    get(path, controller, action) {
        const element = new ElementOfRouter_1.default(path, HttpMethod_1.HTTP_METHOD.Get, controller, action);
        this.stack.push(element);
        return this;
    }
    post(path, controller, action) {
        const element = new ElementOfRouter_1.default(path, HttpMethod_1.HTTP_METHOD.Post, controller, action);
        this.stack.push(element);
        return this;
    }
    channel(path, channel) {
        const element = new RouterChannel_1.default(path, channel);
        this.channelsStack.push(element);
        return this;
    }
    read(path, method) {
        for (const routerElement of this.stack) {
            if (routerElement.getStructure().path === path && routerElement.getStructure().method === method) {
                return routerElement.getStructure();
            }
        }
        throw new RouterElementNotFound_1.default(path, method);
    }
    readChannel(path) {
        for (const channelElement of this.channelsStack) {
            if (channelElement.getStructure().path === path) {
                return channelElement.getStructure();
            }
        }
        throw new ChannelElementNotFound_1.default(path);
    }
}
exports.default = Router;
//# sourceMappingURL=Router.js.map