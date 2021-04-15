import DatabaseConfig from "../Data/Structures/DatabaseConfig";
import TableData from "../Data/Structures/TableData";
import { DatabaseConditionOperator } from "../Data/Types/DatabaseConditionOperator";
import { DatabaseValue } from "../Data/Types/DatabaseValue";
import DatabaseProvider from "./Model/DatabaseProvider";
import QueryBuilder from "./Model/QueryBuilder";
export default abstract class Model<Schema = {}> {
    protected static config: DatabaseConfig;
    protected abstract table: string;
    protected queryBuilder: QueryBuilder;
    protected provider: DatabaseProvider;
    constructor();
    from(tableName: string): Model<Schema>;
    select(...fields: Array<string>): Model<Schema>;
    join(tableName: string, left: string, right: string, ...fields: Array<string>): Model<Schema>;
    where(field: string, value: DatabaseValue, operator?: DatabaseConditionOperator): Model<Schema>;
    or(field: string, value: DatabaseValue, operator?: DatabaseConditionOperator): Model<Schema>;
    and(field: string, value: DatabaseValue, operator?: DatabaseConditionOperator): Model<Schema>;
    insert(data: TableData): Promise<number | null>;
    get(): Promise<Array<Schema> | null>;
    update(data: TableData): Promise<number | null>;
    delete(): Promise<number | null>;
    first(): Promise<Schema | null>;
    protected setFieldsAndValuesFromData(data: TableData): void;
    protected createProvider(): DatabaseProvider | never;
    protected get getTable(): string;
    static setConfig(config: DatabaseConfig): void;
}
//# sourceMappingURL=Model.d.ts.map