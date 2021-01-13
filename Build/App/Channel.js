"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Channel {
    constructor(socket) {
        this.socket = socket;
    }
    init() {
        this.socket.onopen = this.onSocketOpen.bind(this);
        this.socket.onmessage = this.onSocketMessage.bind(this);
        this.socket.onclose = this.onSocketClose.bind(this);
        this.socket.onerror = this.onSocketError.bind(this);
    }
    onSocketOpen(event) {
        this.onOpen();
    }
    onSocketMessage(event) {
        this.onMessage(event.data);
    }
    onSocketClose(event) {
        this.onClose(event.code, event.reason);
    }
    onSocketError(event) {
        this.onError(event.message, event.error);
    }
    sendJSON(data) {
        this.socket.send(JSON.stringify(data));
    }
    sendText(data) {
        this.socket.send(data);
    }
}
exports.default = Channel;
