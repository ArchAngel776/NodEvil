import Channel from "../../App/Channel";
import * as WebSocket from "ws";

export type ChannelInstance = { new(socket : WebSocket) : Channel };