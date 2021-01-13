import Validation from "../../Data/Interfaces/Validation";
import { CRUD_OPERATION } from "../../Data/Statics/CrudOperation";
import { STRING } from "../../Data/Statics/String";
import DatabaseConfig from "../../Data/Structures/DatabaseConfig";
import QueryBuilderSchema from "../../Data/Structures/QueryBuilderSchema";
import TableData from "../../Data/Structures/TableData";
import QueryBuilderOperationRequired from "./Exception/QueryBuilderOperationRequired";
import QueryBuilderUndefined from "./Exception/QueryBuilderUndefined";

export default abstract class DatabaseProvider implements Validation {

    protected config : DatabaseConfig;

    protected queryBuilderSchema : QueryBuilderSchema | null;

    public constructor(config : DatabaseConfig) {

        this.config = config;

        this.queryBuilderSchema = null;

    }

    public setSchema(queryBuilderSchema : QueryBuilderSchema) : void {

        this.queryBuilderSchema = queryBuilderSchema;

    }

    public validation() : void | never {

        if (this.queryBuilderSchema === null) {

            throw new QueryBuilderUndefined();

        }

        if (this.queryBuilderSchema.operation === null) {

            throw new QueryBuilderOperationRequired();

        }

        if ((this.queryBuilderSchema.operation === CRUD_OPERATION.CREATE || this.queryBuilderSchema.operation === CRUD_OPERATION.UPDATE) && this.queryBuilderSchema.main.fields.length !== this.queryBuilderSchema.main.values.length) {

            throw new Error();

        }

        if (this.queryBuilderSchema.join.joining && this.queryBuilderSchema.operation === CRUD_OPERATION.READ) {

            if (this.queryBuilderSchema.join.tableName === STRING.EMPTY) {

                throw new Error();

            }

            if (this.queryBuilderSchema.join.on.left === STRING.EMPTY || this.queryBuilderSchema.join.on.right === STRING.EMPTY) {

                throw new Error();

            }

        }

        if (this.queryBuilderSchema.filter.conditions.length > 0 && this.queryBuilderSchema.filter.conditions.length !== this.queryBuilderSchema.filter.operators.length + 1) {

            throw new Error();

        }

    }

    public abstract create() : Promise<number | never>;

    public abstract read() : Promise<TableData[] | never>;

    public abstract update() : Promise<number | never>;

    public abstract delete() : Promise<number | never>;

}