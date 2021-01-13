import DatabaseProvider from "../DatabaseProvider";
import { Client } from "pg";
import DatabaseConfig from "../../../Data/Structures/DatabaseConfig";
import TableData from "../../../Data/Structures/TableData";
export default class PostgresqlDatabaseProvider extends DatabaseProvider {
    protected client: Client;
    constructor(config: DatabaseConfig);
    create(): Promise<number | never>;
    read(): Promise<TableData[] | never>;
    update(): Promise<TableData[] | never>;
    delete(): Promise<number | never>;
}
//# sourceMappingURL=PostgresqlDatabaseProvider.d.ts.map