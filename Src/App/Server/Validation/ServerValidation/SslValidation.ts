import * as fs from "fs";
import SslCertificateRequired from "../../Exception/SslCertificateRequired";
import SslCertificateWrongPath from "../../Exception/SslCertificateWrongPath";
import SslChainWrongPath from "../../Exception/SslChainWrongPath";
import SslPrivateKeyRequired from "../../Exception/SslPrivateKeyRequired";
import SslPrivateKeyWrongPath from "../../Exception/SslPrivateKeyWrongPath";
import ServerValidation from "../ServerValidation";

export default class SslValidation extends ServerValidation {

    public validate() : void | never {

        if (this.config.ssl !== undefined) {

            if (this.config.ssl.privateKey === undefined) {

                throw new SslPrivateKeyRequired();
    
            }
    
            else if (!(fs.existsSync(this.config.ssl.privateKey) && fs.lstatSync(this.config.ssl.privateKey).isFile())) {
    
                throw new SslPrivateKeyWrongPath(this.config.ssl.privateKey)
    
            }
    
            else if (this.config.ssl.certificate === undefined) {
    
                throw new SslCertificateRequired();
    
            }
    
            else if (!(fs.existsSync(this.config.ssl.certificate) && fs.lstatSync(this.config.ssl.certificate).isFile())) {
    
                throw new SslCertificateWrongPath(this.config.ssl.certificate);
    
            }
    
            else if (this.config.ssl.chain !== undefined && !(fs.existsSync(this.config.ssl.chain) && fs.lstatSync(this.config.ssl.chain).isFile())) {
    
                throw new SslChainWrongPath(this.config.ssl.chain);
    
            }

        }

    }

}