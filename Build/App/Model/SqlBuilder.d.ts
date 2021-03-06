import QueryBuilderSchema from "../../Data/Structures/QueryBuilderSchema";
export default abstract class SqlBuilder {
    protected schema: QueryBuilderSchema;
    constructor(schema: QueryBuilderSchema);
    abstract build(): string;
    protected where(): string;
}
//# sourceMappingURL=SqlBuilder.d.ts.map