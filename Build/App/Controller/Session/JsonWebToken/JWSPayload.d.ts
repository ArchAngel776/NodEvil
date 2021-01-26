import JWSPayloadStructure from "../../../../Data/Structures/JWSPayloadStructure";
export default class JWSPayload {
    protected payload: JWSPayloadStructure | null;
    protected hash: string | null;
    constructor();
    loadPayload(payload: JWSPayloadStructure): void;
    loadHash(hash: string): void;
    getPayload(): JWSPayloadStructure | null;
    getHash(): string | null;
}
//# sourceMappingURL=JWSPayload.d.ts.map