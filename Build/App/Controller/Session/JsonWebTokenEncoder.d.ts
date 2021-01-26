import CookieStructure from "../../../Data/Structures/CookieStructure";
import JOSEHeaderStructure from "../../../Data/Structures/JOSEHeaderStructure";
import JOSEHeader from "./JsonWebToken/JOSEHeader";
import JWSPayload from "./JsonWebToken/JWSPayload";
import JWTSignature from "./JsonWebToken/JWTSignature";
export default class JsonWebTokenEncoder {
    protected header: JOSEHeaderStructure;
    protected joseHeader: JOSEHeader;
    protected jwsPayload: JWSPayload;
    protected jwtSignature: JWTSignature;
    constructor(header: JOSEHeaderStructure);
    getToken(payload: CookieStructure): string;
}
//# sourceMappingURL=JsonWebTokenEncoder.d.ts.map