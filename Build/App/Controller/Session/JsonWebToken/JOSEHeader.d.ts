import JOSEHeaderStructure from "../../../../Data/Structures/JOSEHeaderStructure";
export default class JOSEHeader {
    protected header: JOSEHeaderStructure | null;
    protected hash: string | null;
    constructor();
    loadHeader(header: JOSEHeaderStructure): void;
    loadHash(hash: string): void;
    getHeader(): JOSEHeaderStructure | null;
    getHash(): string | null;
}
//# sourceMappingURL=JOSEHeader.d.ts.map