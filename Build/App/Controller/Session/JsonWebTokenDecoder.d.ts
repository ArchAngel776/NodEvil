import CookieStructure from "../../../Data/Structures/CookieStructure";
import JWSPayloadStructure from "../../../Data/Structures/JWSPayloadStructure";
import JOSEHeader from "./JsonWebToken/JOSEHeader";
import JWSPayload from "./JsonWebToken/JWSPayload";
import JWTSignature from "./JsonWebToken/JWTSignature";
export default class JsonWebTokenDecoder {
    protected token: string;
    protected joseHeader: JOSEHeader;
    protected jwsPayload: JWSPayload;
    protected jwtSignature: JWTSignature;
    constructor(token: string);
    extractData(): CookieStructure;
    protected payloadToCookies(payload: JWSPayloadStructure): CookieStructure;
}
//# sourceMappingURL=JsonWebTokenDecoder.d.ts.map