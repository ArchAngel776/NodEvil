import QueryBuilderSchema from "../../Data/Structures/QueryBuilderSchema";
import { QueryBuilderOperation } from "../../Data/Types/QueryBuilderOperation";
import Filter from "./QueryBuilder/Filter";
import Join from "./QueryBuilder/Join";
import Main from "./QueryBuilder/Main";
export default class QueryBuilder {
    protected main: Main;
    protected join: Join;
    protected filter: Filter;
    protected operation: QueryBuilderOperation | null;
    constructor(tableName: string);
    selectMain(): Main;
    selectJoin(): Join;
    selectFilter(): Filter;
    changeOperation(operation: QueryBuilderOperation): void;
    getSchema(): QueryBuilderSchema | never;
}
//# sourceMappingURL=QueryBuilder.d.ts.map