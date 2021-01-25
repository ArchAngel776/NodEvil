import { HTTP_METHOD } from "../Data/Statics/HttpMethod";
import ChannelElement from "../Data/Structures/ChannelElement";
import ChannelsStack from "../Data/Structures/ChannelsStack";
import RouterElement from "../Data/Structures/RouterElement";
import RouterStack from "../Data/Structures/RouterStack";
import { ChannelInstance } from "../Data/Types/ChannelInstance";
import { ControllerInstance } from "../Data/Types/ControllerInstance";
import { HttpMethod } from "../Data/Types/HttpMethod";
import ElementOfRouter from "./Router/ElementOfRouter";
import ChannelElementNotFound from "./Router/Exception/ChannelElementNotFound";
import RouterElementNotFound from "./Router/Exception/RouterElementNotFound";
import RouterChannel from "./Router/RouterChannel";

export default class Router {

    protected stack : RouterStack;

    protected channelsStack : ChannelsStack;

    public constructor() {

        this.stack = [];

        this.channelsStack = [];

    }

    public get(path : string, controller : ControllerInstance, action : string) : Router {

        const element = new ElementOfRouter(path, HTTP_METHOD.Get, controller, action);

        this.stack.push(element);

        return this;

    }

    public post(path : string, controller : ControllerInstance, action : string) : Router {

        const element = new ElementOfRouter(path, HTTP_METHOD.Post, controller, action);

        this.stack.push(element);

        return this;

    }

    public channel(path : string, channel : ChannelInstance) : Router {

        const element = new RouterChannel(path, channel);

        this.channelsStack.push(element);

        return this;

    }

    public read(path : string, method : HttpMethod) : RouterElement | never {

        for (const routerElement of this.stack) {

            if (routerElement.getStructure().path === path && routerElement.getStructure().method === method) {

                return routerElement.getStructure();

            }

        }

        throw new RouterElementNotFound(path, method);

    }

    public readChannel(path : string) : ChannelElement | never {

        for (const channelElement of this.channelsStack) {

            if (channelElement.getStructure().path === path) {

                return channelElement.getStructure();

            }

        }

        throw new ChannelElementNotFound(path);

    }

}