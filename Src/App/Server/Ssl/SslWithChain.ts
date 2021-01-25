import { readFileSync } from "fs";
import SslStructure from "../../../Data/Structures/SslStructure";
import SslBasic from "./SslBasic";

export default class SslWithChain extends SslBasic {

    protected chain : string | Buffer;

    public constructor(privKey : string, certPem : string, chain : string) {

        super(privKey, certPem);

        this.chain = readFileSync(chain);

    }

    public getObject() : SslStructure {

        return {
            ...super.getObject(),
            ca: this.chain
        };

    }

}