import { readFileSync } from "fs";
import SslStructure from "../../Data/Structures/SslStructure";
import SslConfig from "../../Data/Structures/SslConfig";
import SslWithChain from "./Ssl/SslWithChain";
import SslBasic from "./Ssl/SslBasic";

export default class Ssl {

    protected sslStructure : SslStructure | undefined;

    public constructor(sslConfig : SslConfig | undefined = undefined) {

        this.sslStructure = sslConfig ? this.createStructure(sslConfig) : undefined;

    }

    protected createStructure(sslConfig : SslConfig) : SslStructure {

        return sslConfig.chain ? 
        
            new SslWithChain(sslConfig.privateKey, sslConfig.certificate, sslConfig.chain).getObject() :

            new SslBasic(sslConfig.privateKey, sslConfig.certificate).getObject()

    }

    public flush() : SslStructure | undefined {

        return this.sslStructure;

    }

}