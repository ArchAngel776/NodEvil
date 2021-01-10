export default class SslPrivateKeyRequired extends Error {

    public constructor() {

        super();

        this.name = "SSL Private Key Required Exception";

        this.message = "Server with SSL requires path to private key.";

    }

}