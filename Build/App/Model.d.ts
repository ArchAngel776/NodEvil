import DatabaseConfig from "../Data/Structures/DatabaseConfig";
import TableData from "../Data/Structures/TableData";
import { DatabaseConditionOperator } from "../Data/Types/DatabaseConditionOperator";
import { DatabaseValue } from "../Data/Types/DatabaseValue";
import DatabaseProvider from "./Model/DatabaseProvider";
import QueryBuilder from "./Model/QueryBuilder";
export default abstract class Model {
    protected static config: DatabaseConfig;
    protected abstract table: string;
    protected queryBuilder: QueryBuilder;
    protected provider: DatabaseProvider;
    constructor();
    from(tableName: string): Model;
    select(...fields: string[]): Model;
    join(tableName: string, left: string, right: string, ...fields: string[]): Model;
    where(field: string, value: DatabaseValue, operator?: DatabaseConditionOperator): Model;
    or(field: string, value: DatabaseValue, operator?: DatabaseConditionOperator): Model;
    and(field: string, value: DatabaseValue, operator?: DatabaseConditionOperator): Model;
    insert(data: TableData): any | null;
    get(): Promise<any | null>;
    update(data: TableData): any | null;
    delete(): any | null;
    protected setFieldsAndValuesFromData(data: TableData): void;
    protected createProvider(): DatabaseProvider | never;
    protected get getTable(): string;
    static setConfig(config: DatabaseConfig): void;
}
//# sourceMappingURL=Model.d.ts.map