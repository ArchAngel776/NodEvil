export default class SslPrivateKeyWrongPath extends Error {

    public constructor(privateKeyPath : string) {

        super();

        this.name = "SSL Private Key Wrong Path Exception";

        this.message = "Path: " + privateKeyPath + " is incorrect SSL private key path.";

    }

}