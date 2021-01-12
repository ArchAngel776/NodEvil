import ChannelElement from "../../Data/Structures/ChannelElement";
import Channel from "../Channel";

export default class RouterChannel {

    protected path : string;

    protected channel : { new() : Channel };

    public constructor(path : string, channel : { new() : Channel }) {

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