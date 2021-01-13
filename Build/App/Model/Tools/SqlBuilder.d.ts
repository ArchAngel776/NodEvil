import QueryBuilderSchema from "../../../Data/Structures/QueryBuilderSchema";
export default class SqlBuilder {
    protected queryBuilderSchema: QueryBuilderSchema;
    constructor(queryBuilderSchema: QueryBuilderSchema);
    build(): string | never;
    protected select(): string;
    protected insert(): string;
    protected delete(): string;
    protected update(): string;
}
//# sourceMappingURL=SqlBuilder.d.ts.map