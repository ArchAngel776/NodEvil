import DatabaseProvider from "../DatabaseProvider";
import SelectSqlBuilder from "../SqlBuilder/SelectSqlBuilder";
import * as PostgreSql from "pg";
import DatabaseConfig from "../../../Data/Structures/DatabaseConfig";
import InsertSqlBuilder from "../SqlBuilder/InsertSqlBuilder";
import UpdateSqlBuilder from "../SqlBuilder/UpdateSqlBuilder";
import DeleteSqlBuilder from "../SqlBuilder/DeleteSqlBuilder";
import TableData from "../../../Data/Structures/TableData";
import { SqlBuilderInstance } from "../../../Data/Types/SqlBuilderInstance";
import QueryBuilderSchema from "../../../Data/Structures/QueryBuilderSchema";

export default class PostgresqlDatabaseProvider extends DatabaseProvider {

    protected client : PostgreSql.Client;

    public constructor(config : DatabaseConfig) {

        super(config);

        this.client = new PostgreSql.Client({
            host: this.config.host,
            port: this.config.port,
            user: this.config.username,
            password: this.config.password,
            database: this.config.dbname
        });

    }

    protected async operation(SqlBuilder : SqlBuilderInstance) : Promise<PostgreSql.QueryResult | never> {

        await this.client.connect();

        const result = await this.client.query(new SqlBuilder(<QueryBuilderSchema> this.queryBuilderSchema).build());

        await this.client.end();

        return result;

    }

    public async create() : Promise<number | never> {

        const result = await this.operation(InsertSqlBuilder);

        return result.rowCount;

    }

    public async read() : Promise<TableData[] | never> {

        const result = await this.operation(SelectSqlBuilder);
        
        return result.rows;

    }

    public async update() : Promise<number | never> {

        const result = await this.operation(UpdateSqlBuilder);

        return result.rowCount;

    }

    public async delete() : Promise<number | never> {

        const result = await this.operation(DeleteSqlBuilder);

        return result.rowCount;

    }

}