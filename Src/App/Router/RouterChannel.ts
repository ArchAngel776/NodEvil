import ChannelElement from "../../Data/Structures/ChannelElement";
import { ChannelInstance } from "../../Data/Types/ChannelInstance";

export default class RouterChannel {

    protected path : string;

    protected channel : ChannelInstance;

    public constructor(path : string, channel : ChannelInstance) {

        this.path = path;

        this.channel = channel;

    }

    public getStructure() : ChannelElement {

        const result : ChannelElement = {
            path: this.path,
            channel: this.channel
        };

        return result;

    }

}