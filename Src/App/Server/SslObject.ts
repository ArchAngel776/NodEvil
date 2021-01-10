import { readFileSync } from "fs";
import SslStructure from "../../Data/Structures/SslStructure";
import SslConfig from "../../Data/Structures/SslConfig";

export default class SslObject {

    protected sslStructure : SslStructure | undefined;

    public constructor(sslConfig : SslConfig | undefined = undefined) {

        this.sslStructure = sslConfig ? this.createStructure(sslConfig) : undefined;

    }

    protected createStructure(sslConfig : SslConfig) : SslStructure {

        let result : SslStructure = {
            key: readFileSync(sslConfig.privateKey),
            cert: readFileSync(sslConfig.certificate)
        };

        if (sslConfig.chain) {

            result.ca = readFileSync(sslConfig.chain);

        }

        return result;

    }

    public flush() : SslStructure | undefined {

        return this.sslStructure;

    }

}