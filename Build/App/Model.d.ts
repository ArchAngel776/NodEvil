import TableData from "../Data/Structures/TableData";
import { DatabaseConditionOperator } from "../Data/Types/DatabaseConditionOperator";
import { DatabaseValue } from "../Data/Types/DatabaseValue";
import QueryBuilder from "./Model/QueryBuilder";
export default abstract class Model {
    protected abstract table: string;
    protected queryBuilder: QueryBuilder;
    constructor();
    from(tableName: string): Model;
    select(...fields: string[]): Model;
    join(tableName: string, left: string, right: string, ...fields: string[]): Model;
    where(field: string, value: DatabaseValue, operator?: DatabaseConditionOperator): Model;
    or(field: string, value: DatabaseValue, operator?: DatabaseConditionOperator): Model;
    and(field: string, value: DatabaseValue, operator?: DatabaseConditionOperator): Model;
    insert(data: TableData): any;
    get(): any;
    update(data: TableData): any;
    delete(): any;
    protected get getTable(): string;
}
//# sourceMappingURL=Model.d.ts.map