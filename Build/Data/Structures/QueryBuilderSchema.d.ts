import { QueryBuilderOperation } from "../Types/QueryBuilderOperation";
import FilterSchema from "./FilterSchema";
import JoinTableSchema from "./JoinTableSchema";
import TableSchema from "./TableSchema";
export default interface QueryBuilderSchema {
    main: TableSchema;
    join: JoinTableSchema;
    filter: FilterSchema;
    operation: QueryBuilderOperation;
}
//# sourceMappingURL=QueryBuilderSchema.d.ts.map