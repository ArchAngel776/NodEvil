import { readFileSync } from "fs";
import SslStructure from "../../../Data/Structures/SslStructure";

export default class SslBasic {

    protected privKey : string | Buffer;

    protected certPem : string | Buffer;

    public constructor(privKey : string, certPem : string) {

        this.privKey = readFileSync(privKey);

        this.certPem = readFileSync(certPem);

    }

    public getObject() : SslStructure {

        return {
            key: this.privKey,
            cert: this.certPem
        };

    }

}