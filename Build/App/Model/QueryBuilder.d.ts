import QueryBuilderSchema from "../../Data/Structures/QueryBuilderSchema";
import { CrudOperation } from "../../Data/Types/CrudOperation";
import Filter from "./QueryBuilder/Filter";
import Join from "./QueryBuilder/Join";
import Main from "./QueryBuilder/Main";
export default class QueryBuilder {
    protected main: Main;
    protected join: Join;
    protected filter: Filter;
    protected operation: CrudOperation | null;
    constructor(tableName: string);
    selectMain(): Main;
    selectJoin(): Join;
    selectFilter(): Filter;
    changeOperation(operation: CrudOperation): void;
    getSchema(): QueryBuilderSchema;
}
//# sourceMappingURL=QueryBuilder.d.ts.map