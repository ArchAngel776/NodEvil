import RouterChannel from "../../App/Router/RouterChannel";

export default interface ChannelsStack extends Array<RouterChannel> {
    [ index : number ] : RouterChannel;
}