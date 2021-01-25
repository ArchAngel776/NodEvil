/// <reference types="node" />
import SslStructure from "../../../Data/Structures/SslStructure";
export default class SslBasic {
    protected privKey: string | Buffer;
    protected certPem: string | Buffer;
    constructor(privKey: string, certPem: string);
    getObject(): SslStructure;
}
//# sourceMappingURL=SslBasic.d.ts.map