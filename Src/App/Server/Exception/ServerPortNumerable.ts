export default class ServerPortNumerable extends Error {

    public constructor(port : number) {

        super();

        this.name = "Server Port Numerable Exception";

        this.message = "Specyfic port must an integer. Value: " + port + " is incorrect.";

    }

}