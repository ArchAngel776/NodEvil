import JOSEHeaderStructure from "../../../../Data/Structures/JOSEHeaderStructure";
import JWSPayloadStructure from "../../../../Data/Structures/JWSPayloadStructure";
export default class JWTSignature {
    protected signature: string | null;
    constructor();
    load(signature: string): void;
    checkSignature(joseHeader: JOSEHeaderStructure, jwsPayload: JWSPayloadStructure): boolean;
    createSignature(joseHeaderHash: string, jwsPayloadHash: string): string;
}
//# sourceMappingURL=JWTSignature.d.ts.map