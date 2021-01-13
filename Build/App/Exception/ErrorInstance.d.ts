import Init from "../../Data/Interfaces/Init";
export default abstract class ErrorInstance extends Error implements Init {
    protected args: any[];
    constructor(...args: any[]);
    init(): void;
    protected abstract getTitle(): string;
    protected abstract getMessage(...args: any[]): string;
}
//# sourceMappingURL=ErrorInstance.d.ts.map