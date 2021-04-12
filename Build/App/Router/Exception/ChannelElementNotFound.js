"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChannelElementNotFound extends Error {
    constructor(path) {
        super();
        this.name = "Channel Element Not Found Exception";
        this.message = "Chanel under path " + path + " was not found.";
    }
}
exports.default = ChannelElementNotFound;
//# sourceMappingURL=ChannelElementNotFound.js.map