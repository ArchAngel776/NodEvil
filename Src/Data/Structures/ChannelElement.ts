import Channel from "../../App/Channel";

export default interface ChannelElement {
    path : string;
    channel : { new() : Channel };
}