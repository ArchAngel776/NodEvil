import SslStructure from "../../Data/Structures/SslStructure";
import SslConfig from "../../Data/Structures/SslConfig";
export default class Ssl {
    protected sslStructure: SslStructure | undefined;
    constructor(sslConfig?: SslConfig | undefined);
    protected createStructure(sslConfig: SslConfig): SslStructure;
    flush(): SslStructure | undefined;
}
//# sourceMappingURL=Ssl.d.ts.map