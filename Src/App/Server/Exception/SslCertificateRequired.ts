export default class SslCertificateRequired extends Error {

    public constructor() {

        super();

        this.name = "SSL Certificate Required Exception";

        this.message = "Server with SSL requires path to certificate.";

    }

}