import CookieStructure from "../../../Data/Structures/CookieStructure";
import JWSPayloadStructure from "../../../Data/Structures/JWSPayloadStructure";
import JOSEHeader from "./JsonWebToken/JOSEHeader";
import JWSPayload from "./JsonWebToken/JWSPayload";
import JWTSignature from "./JsonWebToken/JWTSignature";

export default class JsonWebTokenDecoder {

    protected token : string;

    protected joseHeader : JOSEHeader;

    protected jwsPayload : JWSPayload;

    protected jwtSignature : JWTSignature;

    public constructor(token : string) {

        this.token = token;

        this.joseHeader = new JOSEHeader();

        this.jwsPayload = new JWSPayload();

        this.jwtSignature = new JWTSignature();

    }

    public extractData() : CookieStructure {

        const parts = this.token.split(".");

        if (parts.length !== 3) {

            return {};

        }

        this.joseHeader.loadHash(parts[0]);

        this.jwsPayload.loadHash(parts[1]);

        this.jwtSignature.load(parts[2]);

        const joseHeader = this.joseHeader.getHeader();

        const jwsPayload = this.jwsPayload.getPayload();

        if (joseHeader === null || jwsPayload === null || !this.jwtSignature.checkSignature(joseHeader, jwsPayload)) {

            return {};

        }

        return this.payloadToCookies(jwsPayload);

    }

    protected payloadToCookies(payload : JWSPayloadStructure) : CookieStructure {

        let result : CookieStructure = {};

        for (const key in payload) {

            result[key] = payload[key].toString();

        }

        return result;

    }

}