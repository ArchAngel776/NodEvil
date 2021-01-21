"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SocketClient {
    constructor(socket, Channel, session) {
        this.socket = socket;
        this.session = session;
        this.channel = new Channel(this.socket, this.session);
    }
    init() {
        this.socket.onopen = this.onSocketOpen.bind(this);
        this.socket.onmessage = this.onSocketMessage.bind(this);
        this.socket.onclose = this.onSocketClose.bind(this);
        this.socket.onerror = this.onSocketError.bind(this);
    }
    onSocketOpen(event) {
        this.channel.onOpen();
    }
    onSocketMessage(event) {
        this.channel.onMessage(event.data);
    }
    onSocketClose(event) {
        this.channel.onClose(event.code, event.reason);
    }
    onSocketError(event) {
        this.channel.onError(event.message, event.error);
    }
}
exports.default = SocketClient;
