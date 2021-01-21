import DatabaseProvider from "../DatabaseProvider";
import * as PostgreSql from "pg";
import TableData from "../../../Data/Structures/TableData";
import { SqlBuilderInstance } from "../../../Data/Types/SqlBuilderInstance";
export default class PostgresqlDatabaseProvider extends DatabaseProvider {
    protected operation(SqlBuilder: SqlBuilderInstance): Promise<PostgreSql.QueryResult | never>;
    create(): Promise<number | never>;
    read(): Promise<TableData[] | never>;
    update(): Promise<number | never>;
    delete(): Promise<number | never>;
}
//# sourceMappingURL=PostgresqlDatabaseProvider.d.ts.map