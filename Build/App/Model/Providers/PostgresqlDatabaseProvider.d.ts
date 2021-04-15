import DatabaseProvider from "../DatabaseProvider";
import * as PostgreSql from "pg";
import { SqlBuilderInstance } from "../../../Data/Types/SqlBuilderInstance";
export default class PostgresqlDatabaseProvider extends DatabaseProvider {
    protected getConfig(): PostgreSql.ClientConfig;
    protected operation(SqlBuilder: SqlBuilderInstance): Promise<PostgreSql.QueryResult | never>;
    create(): Promise<number | never>;
    read<Schema>(): Promise<Array<Schema> | never>;
    update(): Promise<number | never>;
    delete(): Promise<number | never>;
}
//# sourceMappingURL=PostgresqlDatabaseProvider.d.ts.map