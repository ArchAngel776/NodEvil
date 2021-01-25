import Channel from "../../App/Channel";
import * as WebSocket from "ws";
import SocketSession from "../../App/Channel/SocketSession";

export type ChannelInstance = { new (socket : WebSocket, session : SocketSession) : Channel };