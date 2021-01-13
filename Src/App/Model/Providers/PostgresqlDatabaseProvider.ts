import QueryBuilderSchema from "../../../Data/Structures/QueryBuilderSchema";
import DatabaseProvider from "../DatabaseProvider";
import SelectSqlBuilder from "../SqlBuilder/SelectSqlBuilder";
import { Client } from "pg";
import DatabaseConfig from "../../../Data/Structures/DatabaseConfig";
import InsertSqlBuilder from "../SqlBuilder/InsertSqlBuilder";
import UpdateSqlBuilder from "../SqlBuilder/UpdateSqlBuilder";
import DeleteSqlBuilder from "../SqlBuilder/DeleteSqlBuilder";
import TableData from "../../../Data/Structures/TableData";

export default class PostgresqlDatabaseProvider extends DatabaseProvider {

    protected client : Client;

    public constructor(config : DatabaseConfig) {

        super(config);

        this.client = new Client({
            host: this.config.host,
            port: this.config.port,
            user: this.config.username,
            password: this.config.password,
            database: this.config.dbname
        });

    }

    public async create() : Promise<number | never> {

        await this.client.connect();

        const sqlBuilder = new InsertSqlBuilder(this.queryBuilderSchema as QueryBuilderSchema);

        const result = await this.client.query(sqlBuilder.build());

        await this.client.end();

        return result.rowCount;

    }

    public async read() : Promise<TableData[] | never> {

        await this.client.connect();

        const sqlBuilder = new SelectSqlBuilder(this.queryBuilderSchema as QueryBuilderSchema);

        console.log(sqlBuilder.build());

        const result = await this.client.query(sqlBuilder.build());

        await this.client.end();

        return result.rows;

    }

    public async update() : Promise<TableData[] | never> {

        await this.client.connect();

        const sqlBuilder = new UpdateSqlBuilder(this.queryBuilderSchema as QueryBuilderSchema);

        const result = await this.client.query(sqlBuilder.build());

        await this.client.end();

        return result.rows;

    }

    public async delete() : Promise<number | never> {

        await this.client.connect();

        const sqlBuilder = new DeleteSqlBuilder(this.queryBuilderSchema as QueryBuilderSchema);

        const result = await this.client.query(sqlBuilder.build());

        await this.client.end();

        return result.rowCount;

    }

}