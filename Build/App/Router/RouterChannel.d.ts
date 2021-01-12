import ChannelElement from "../../Data/Structures/ChannelElement";
import Channel from "../Channel";
export default class RouterChannel {
    protected path: string;
    protected channel: {
        new (): Channel;
    };
    constructor(path: string, channel: {
        new (): Channel;
    });
    getStructure(): ChannelElement;
}
//# sourceMappingURL=RouterChannel.d.ts.map