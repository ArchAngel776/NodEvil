"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Channel {
    constructor(socket, session) {
        this.socket = socket;
        this.session = session;
    }
    sendJSON(data) {
        this.socket.send(JSON.stringify(data));
    }
    sendText(data) {
        this.socket.send(data.toString());
    }
}
exports.default = Channel;
//# sourceMappingURL=Channel.js.map