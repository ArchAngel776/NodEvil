import Channel from "../../App/Channel";
import * as WebSocket from "ws";
import Session from "../../App/Controller/Session";

export type ChannelInstance = new (socket : WebSocket, session : Session) => Channel;