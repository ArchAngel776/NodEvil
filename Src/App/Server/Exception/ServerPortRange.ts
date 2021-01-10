export default class ServerPortRange extends Error {

    public constructor(port : number) {

        super();

        this.name = "Server Port Range Exception";

        this.message = "Port must be an number in range 1-65535. Value: " + port + " is incorrect.";

    }

}