/// <reference types="node" />
import * as http2 from "http2";
import SslStructure from "../../../Data/Structures/SslStructure";
import Core from "./Core";
export default class Http2Core extends Core {
    protected requestHandler(request: http2.Http2ServerRequest, response: http2.Http2ServerResponse): Promise<void>;
    protected createSecured(ssl: SslStructure): http2.Http2SecureServer;
    protected createUnsecured(): http2.Http2Server;
}
//# sourceMappingURL=Http2Core.d.ts.map