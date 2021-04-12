"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RouterChannel {
    constructor(path, channel) {
        this.path = path;
        this.channel = channel;
    }
    getStructure() {
        const result = {
            path: this.path,
            channel: this.channel
        };
        return result;
    }
}
exports.default = RouterChannel;
//# sourceMappingURL=RouterChannel.js.map