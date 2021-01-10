import QueryBuilder from "./Model/QueryBuilder";
export default abstract class Model {
    protected abstract table: string;
    protected queryBuilder: QueryBuilder;
    constructor();
    protected get getTable(): string;
}
//# sourceMappingURL=Model.d.ts.map