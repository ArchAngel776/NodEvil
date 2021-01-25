/// <reference types="node" />
import SslStructure from "../../../Data/Structures/SslStructure";
import SslBasic from "./SslBasic";
export default class SslWithChain extends SslBasic {
    protected chain: string | Buffer;
    constructor(privKey: string, certPem: string, chain: string);
    getObject(): SslStructure;
}
//# sourceMappingURL=SslWithChain.d.ts.map