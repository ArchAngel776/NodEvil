import QueryBuilderSchema from "../../../Data/Structures/QueryBuilderSchema";
import DatabaseProvider from "../DatabaseProvider";
import SelectSqlBuilder from "../SqlBuilder/SelectSqlBuilder";
import * as MySql from "mysql";
import DatabaseConfig from "../../../Data/Structures/DatabaseConfig";
import TableData from "../../../Data/Structures/TableData";
import { SqlBuilderInstance } from "../../../Data/Types/SqlBuilderInstance";
import InsertSqlBuilder from "../SqlBuilder/InsertSqlBuilder";
import UpdateSqlBuilder from "../SqlBuilder/UpdateSqlBuilder";
import DeleteSqlBuilder from "../SqlBuilder/DeleteSqlBuilder";

export default class MysqlDatabaseProvider extends DatabaseProvider {

    protected connection : MySql.Connection;

    public constructor(config : DatabaseConfig) {

        super(config);

        this.connection = MySql.createConnection({
            host: this.config.host,
            port: this.config.port,
            user: this.config.username,
            password: this.config.password,
            database: this.config.dbname
        })

    }

    protected operation(SqlBuilder : SqlBuilderInstance) : Promise<any | never> {

        return new Promise(resolve => {

            this.connection.connect((error : MySql.MysqlError) => {

                if (error) throw error;

                this.connection.query(new SqlBuilder(<QueryBuilderSchema> this.queryBuilderSchema).build(), (error : MySql.MysqlError, result) => {

                    if (error) throw error;

                    resolve(result)

                })

            })

        });

    }

    public async create() : Promise<number | never> {

        const result = await this.operation(InsertSqlBuilder);

        return result.affectedRows;

    }

    public async read() : Promise<TableData[] | never> {

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