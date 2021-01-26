import { STRING } from "../../../Data/Statics/String";
import CookieStructure from "../../../Data/Structures/CookieStructure";
import JOSEHeaderStructure from "../../../Data/Structures/JOSEHeaderStructure";
import JWSPayloadStructure from "../../../Data/Structures/JWSPayloadStructure";
import JOSEHeader from "./JsonWebToken/JOSEHeader";
import JWSPayload from "./JsonWebToken/JWSPayload";
import JWTSignature from "./JsonWebToken/JWTSignature";

export default class JsonWebTokenEncoder {

    protected header : JOSEHeaderStructure;

    protected joseHeader : JOSEHeader;

    protected jwsPayload : JWSPayload;

    protected jwtSignature : JWTSignature;

    public constructor(header : JOSEHeaderStructure) {

        this.header = header;

        this.joseHeader = new JOSEHeader();

        this.jwsPayload = new JWSPayload();

        this.jwtSignature = new JWTSignature();

    }

    public getToken(payload : CookieStructure) : string {

        this.joseHeader.loadHeader(this.header);

        this.jwsPayload.loadPayload(<JWSPayloadStructure> payload);

        const headerHash = this.joseHeader.getHash();

        const payloadHash = this.jwsPayload.getHash();

        if (headerHash === null || payloadHash === null) {

            return STRING.EMPTY;

        }

        return `${headerHash}.${payloadHash}.${this.jwtSignature.createSignature(headerHash, payloadHash)}`;

    }

}