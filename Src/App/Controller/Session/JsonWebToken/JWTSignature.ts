import base64url from "base64url";
import JOSEHeaderStructure from "../../../../Data/Structures/JOSEHeaderStructure";
import JWSPayloadStructure from "../../../../Data/Structures/JWSPayloadStructure";
import * as crypto from "crypto";

export default class JWTSignature {

    protected signature : string | null;

    public constructor() {

        this.signature = null;

    }

    public load(signature : string) : void {

        this.signature = signature;

    }

    public checkSignature(joseHeader : JOSEHeaderStructure, jwsPayload : JWSPayloadStructure) : boolean {

        const joseHeaderString = JSON.stringify(joseHeader);

        const jwsPayloadString = JSON.stringify(jwsPayload);

        const joseHeaderBase64 = base64url(joseHeaderString);

        const jwsPayloadBase64 = base64url(jwsPayloadString);

        const signature = crypto.createHmac("sha256", "abc").update(joseHeaderBase64 + "." + jwsPayloadBase64).digest("hex");

        return signature === this.signature;

    }

}