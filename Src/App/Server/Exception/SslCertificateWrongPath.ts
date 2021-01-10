export default class SslCertificateWrongPath extends Error {

    public constructor(certificatePath : string) {

        super();

        this.name = "SSL Certificate Wrong Path Exception";

        this.message = "Path: " + certificatePath + " is incorrect SSL certificate path.";

    }

}