"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class Channel {
    constructor(socket, session) {
        this.socket = socket;
        this.session = session;
    }
    sendJSON(data) {
        this.socket.send(JSON.stringify(new __1.View(this.session).data(data).json()));
    }
    sendText(data) {
        this.socket.send(JSON.stringify(new __1.View(this.session).data(data).plain()));
    }
}
exports.default = Channel;
