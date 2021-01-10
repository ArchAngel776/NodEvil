export default class QueryBuilder {
    protected mainTable: string;
    protected fields: string[];
    protected values: string[];
    constructor(mainTable: string);
    changeMainTable(mainTable: string): void;
    setFields(fields: string[]): void;
    setValues(values: string[]): void;
}
//# sourceMappingURL=QueryBuilder.d.ts.map