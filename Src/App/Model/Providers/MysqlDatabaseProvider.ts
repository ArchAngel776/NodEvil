import QueryBuilderSchema from "../../../Data/Structures/QueryBuilderSchema";
import DatabaseProvider from "../DatabaseProvider";
import SelectSqlBuilder from "../SqlBuilder/SelectSqlBuilder";
import * as MySql from "mysql";
import { SqlBuilderInstance } from "../../../Data/Types/SqlBuilderInstance";
import InsertSqlBuilder from "../SqlBuilder/InsertSqlBuilder";
import UpdateSqlBuilder from "../SqlBuilder/UpdateSqlBuilder";
import DeleteSqlBuilder from "../SqlBuilder/DeleteSqlBuilder";

export default class MysqlDatabaseProvider extends DatabaseProvider {

    protected getConfig() : MySql.ConnectionConfig {

        return {
            host: this.config.host,
            port: this.config.port,
            user: this.config.username,
            password: this.config.password,
            database: this.config.dbname
        }

    }

    protected operation(SqlBuilder : SqlBuilderInstance) : Promise<any | never> {

        return new Promise(resolve => {

            const connection = MySql.createConnection(this.getConfig());

            connection.connect((error : MySql.MysqlError) => {

                if (error) throw error;

                connection.query(new SqlBuilder(<QueryBuilderSchema> this.queryBuilderSchema).build(), (error : MySql.MysqlError, result : any) => {

                    if (error) throw error;

                    connection.end();

                    resolve(result);

                })

            })

        });

    }

    public async create() : Promise<number | never> {

        const result = await this.operation(InsertSqlBuilder);

        return result.affectedRows;

    }

    public async read<Schema>() : Promise<Array<Schema> | never> {

        const result = await this.operation(SelectSqlBuilder);

        return result;

    }

    public async update() : Promise<number | never> {

        const result = await this.operation(UpdateSqlBuilder);

        return result.affectedRows;

    }

    public async delete() : Promise<number | never> {

        const result = await this.operation(DeleteSqlBuilder);

        return result.affectedRows;

    }

}