const Channel = require("../../Build/index").Channel;

module.exports = class UserChannel extends Channel {

    onOpen() {}

    onMessage(message) {

        //console.log(message);

        this.sendText("Foo");

    }

    onClose() {}

    onError() {}

}