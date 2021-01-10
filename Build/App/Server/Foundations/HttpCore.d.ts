/// <reference types="node" />
import * as http from "http";
import * as https from "https";
import SslStructure from "../../../Data/Structures/SslStructure";
import Core from "./Core";
export default class HttpCore extends Core {
    protected requestHandler(request: http.IncomingMessage, response: http.ServerResponse): Promise<void>;
    protected createSecured(ssl: SslStructure): https.Server;
    protected createUnsecured(): http.Server;
}
//# sourceMappingURL=HttpCore.d.ts.map