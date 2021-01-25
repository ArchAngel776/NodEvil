import ChannelElement from "../Data/Structures/ChannelElement";
import ChannelsStack from "../Data/Structures/ChannelsStack";
import RouterElement from "../Data/Structures/RouterElement";
import RouterStack from "../Data/Structures/RouterStack";
import { ChannelInstance } from "../Data/Types/ChannelInstance";
import { ControllerInstance } from "../Data/Types/ControllerInstance";
import { HttpMethod } from "../Data/Types/HttpMethod";
export default class Router {
    protected stack: RouterStack;
    protected channelsStack: ChannelsStack;
    constructor();
    get(path: string, controller: ControllerInstance, action: string): Router;
    post(path: string, controller: ControllerInstance, action: string): Router;
    channel(path: string, channel: ChannelInstance): Router;
    read(path: string, method: HttpMethod): RouterElement | never;
    readChannel(path: string): ChannelElement | never;
}
//# sourceMappingURL=Router.d.ts.map