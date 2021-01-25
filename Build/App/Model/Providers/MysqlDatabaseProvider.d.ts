import DatabaseProvider from "../DatabaseProvider";
import * as MySql from "mysql";
import TableData from "../../../Data/Structures/TableData";
import { SqlBuilderInstance } from "../../../Data/Types/SqlBuilderInstance";
export default class MysqlDatabaseProvider extends DatabaseProvider {
    protected getConfig(): MySql.ConnectionConfig;
    protected operation(SqlBuilder: SqlBuilderInstance): Promise<any | never>;
    create(): Promise<number | never>;
    read(): Promise<TableData[] | never>;
    update(): Promise<number | never>;
    delete(): Promise<number | never>;
}
//# sourceMappingURL=MysqlDatabaseProvider.d.ts.map