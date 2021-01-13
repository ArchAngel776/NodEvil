import { HTTP_METHOD } from "../Data/Statics/HttpMethod";
import ChannelElement from "../Data/Structures/ChannelElement";
import ChannelsStack from "../Data/Structures/ChannelsStack";
import RouterElement from "../Data/Structures/RouterElement";
import RouterStack from "../Data/Structures/RouterStack";
import { ControllerInstance } from "../Data/Types/ControllerInstance";
import { HttpMethod } from "../Data/Types/HttpMethod";
import Channel from "./Channel";
import Controller from "./Controller";
import ElementOfRouter from "./Router/ElementOfRouter";
import ChannelElementNotFound from "./Router/Exception/ChannelElementNotFound";
import RouterElementNotFound from "./Router/Exception/RouterElementNotFound";
import RouterChannel from "./Router/RouterChannel";

export default class Router {

    protected static instance : Router;

    protected stack : RouterStack;

    protected channelsStack : ChannelsStack;

    public constructor() {

        this.stack = [];

        this.channelsStack = [];

    }

    public get(path : string, controller : ControllerInstance, action : string) : void {

        const element = new ElementOfRouter(path, HTTP_METHOD.Get, controller, action);

        this.stack.push(element);

    }

    public post(path : string, controller : ControllerInstance, action : string) : void {

        const element = new ElementOfRouter(path, HTTP_METHOD.Post, controller, action);

        this.stack.push(element);

    }

    public read(path : string, method : HttpMethod) : RouterElement | never {

        for (const routerElement of this.stack) {

            if (routerElement.getStructure().path === path && routerElement.getStructure().method === method) {

                return routerElement.getStructure();

            }

        }

        throw new RouterElementNotFound(path, method);

    }

    public channel(path : string, channel : { new() : Channel }) : void {

        const element = new RouterChannel(path, channel);

        this.channelsStack.push(element);

    }

    public readChannel(path : string) : ChannelElement | never {

        for (const channelElement of this.channelsStack) {

            if (channelElement.getStructure().path === path) {

                return channelElement.getStructure();

            }

        }

        throw new ChannelElementNotFound(path);

    }

    public static getInstance() : Router {

        if (Router.instance === undefined) {

            Router.instance = new Router();

        }

        return Router.instance;

    }

}