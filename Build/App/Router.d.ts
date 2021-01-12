import ChannelElement from "../Data/Structures/ChannelElement";
import ChannelsStack from "../Data/Structures/ChannelsStack";
import RouterElement from "../Data/Structures/RouterElement";
import RouterStack from "../Data/Structures/RouterStack";
import { HttpMethod } from "../Data/Types/HttpMethod";
import Channel from "./Channel";
import Controller from "./Controller";
export default class Router {
    protected static instance: Router;
    protected stack: RouterStack;
    protected channelsStack: ChannelsStack;
    constructor();
    get(path: string, controller: typeof Controller, action: string): void;
    post(path: string, controller: typeof Controller, action: string): void;
    read(path: string, method: HttpMethod): RouterElement | never;
    channel(path: string, channel: {
        new (): Channel;
    }): void;
    readChannel(path: string): ChannelElement | never;
    static getInstance(): Router;
}
//# sourceMappingURL=Router.d.ts.map