"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Channel {
    constructor(socket) {
        this.socket = socket;
    }
    sendJSON(data) {
        this.socket.send(JSON.stringify(data));
    }
    sendText(data) {
        this.socket.send(data);
    }
}
exports.default = Channel;
