import DatabaseProvider from "../DatabaseProvider";
import SelectSqlBuilder from "../SqlBuilder/SelectSqlBuilder";
import * as PostgreSql from "pg";
import InsertSqlBuilder from "../SqlBuilder/InsertSqlBuilder";
import UpdateSqlBuilder from "../SqlBuilder/UpdateSqlBuilder";
import DeleteSqlBuilder from "../SqlBuilder/DeleteSqlBuilder";
import { SqlBuilderInstance } from "../../../Data/Types/SqlBuilderInstance";
import QueryBuilderSchema from "../../../Data/Structures/QueryBuilderSchema";

export default class PostgresqlDatabaseProvider extends DatabaseProvider {

    protected getConfig() : PostgreSql.ClientConfig {

        return {
            host: this.config.host,
            port: this.config.port,
            user: this.config.username,
            password: this.config.password,
            database: this.config.dbname
        }

    }

    protected async operation(SqlBuilder : SqlBuilderInstance) : Promise<PostgreSql.QueryResult | never> {

        return new Promise(async (resolve, reject) => {

            const client = new PostgreSql.Client(this.getConfig());

            await client.connect();

            client.query(new SqlBuilder(<QueryBuilderSchema> this.queryBuilderSchema).build())
            
            .then(async result => {

                await client.end();

                resolve(result);

            })
            
            .catch(async error => {

                await client.end();

                reject(error);

            });

        })

    }

    public async create() : Promise<number | never> {

        const result = await this.operation(InsertSqlBuilder);

        return result.rowCount;

    }

    public async read<Schema>() : Promise<Array<Schema> | never> {

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