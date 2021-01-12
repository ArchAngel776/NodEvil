export default class ChannelElementNotFound extends Error {

    public constructor(path : string) {

        super();

        this.name = "Channel Element Not Found Exception";

        this.message = "Chanel under path " + path + " was not found.";

    }

}