import ChannelElement from "../../Data/Structures/ChannelElement";
import { ChannelInstance } from "../../Data/Types/ChannelInstance";
export default class RouterChannel {
    protected path: string;
    protected channel: ChannelInstance;
    constructor(path: string, channel: ChannelInstance);
    getStructure(): ChannelElement;
}
//# sourceMappingURL=RouterChannel.d.ts.map