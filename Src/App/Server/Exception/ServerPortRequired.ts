export default class ServerPortRequired extends Error {

    public constructor() {

        super();

        this.name = "Server Port Required Exception";

        this.message = "Server configuration requires a specyfic port.";

    }

}