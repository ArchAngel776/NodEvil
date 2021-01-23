import ErrorInstance from "../../Exception/ErrorInstance";
export default class ValidationType extends ErrorInstance {
    constructor(type: string);
    protected getTitle(): string;
    protected getMessage(type: string): string;
}
//# sourceMappingURL=ValidationType.d.ts.map