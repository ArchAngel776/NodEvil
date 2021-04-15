import { CRUD_OPERATION } from "../Data/Statics/CrudOperation";
import DatabaseConfig from "../Data/Structures/DatabaseConfig";
import TableData from "../Data/Structures/TableData";
import { DatabaseConditionOperator } from "../Data/Types/DatabaseConditionOperator";
import { DatabaseValue } from "../Data/Types/DatabaseValue";
import ExceptionReader from "./Exception/ExceptionReader";
import DatabaseProvider from "./Model/DatabaseProvider";
import DatabaseProviderUnsupported from "./Model/Exception/DatabaseProviderUnsupported";
import PostgresqlDatabaseProvider from "./Model/Providers/PostgresqlDatabaseProvider";
import QueryBuilder from "./Model/QueryBuilder";

export default abstract class Model<Schema = {}> {

    protected static config : DatabaseConfig;

    protected abstract table : string;

    protected queryBuilder : QueryBuilder;

    protected provider : DatabaseProvider;

    public constructor() {

        this.queryBuilder = new QueryBuilder(this.getTable);

        this.provider = this.createProvider();

    }

    public from(tableName : string) : Model<Schema> {

        this.queryBuilder.selectMain().changeTable(tableName);

        return this;

    }

    public select(...fields : Array<string>) : Model<Schema> {

        this.queryBuilder.selectMain().setFields(fields);

        return this;

    }

    public join(tableName : string, left : string, right : string, ...fields : Array<string>) : Model<Schema> {

        this.queryBuilder.selectJoin().activeJoining();

        this.queryBuilder.selectJoin().changeTable(tableName);

        this.queryBuilder.selectJoin().setOn(left, right);

        this.queryBuilder.selectJoin().setFields(fields);

        return this;

    }

    public where(field : string, value : DatabaseValue, operator : DatabaseConditionOperator = "=") : Model<Schema> {

        this.queryBuilder.selectFilter().setCondition(field, value, operator);

        return this;

    }

    public or(field : string, value : DatabaseValue, operator : DatabaseConditionOperator = "=") : Model<Schema> {

        this.queryBuilder.selectFilter().addOrCondition(field, value, operator);

        return this;

    }

    public and(field : string, value : DatabaseValue, operator : DatabaseConditionOperator = "=") : Model<Schema> {

        this.queryBuilder.selectFilter().addAndCondition(field, value, operator);

        return this;

    }

    public async insert(data : TableData) : Promise<number | null> {

        this.setFieldsAndValuesFromData(data);

        this.queryBuilder.changeOperation(CRUD_OPERATION.CREATE);

        this.provider.setSchema(this.queryBuilder.getSchema());

        try {

            this.provider.validation();

            return await this.provider.create();

        }

        catch (errorInstance) {

            const exceptionReader = new ExceptionReader(errorInstance);

            exceptionReader.read();

            return null;

        }

    }

    public async get() : Promise<Array<Schema> | null> {

        this.queryBuilder.changeOperation(CRUD_OPERATION.READ);

        this.provider.setSchema(this.queryBuilder.getSchema());

        try {

            this.provider.validation();

            return await this.provider.read();

        }

        catch (errorInstance) {

            const exceptionReader = new ExceptionReader(errorInstance);

            exceptionReader.read();

            return null;

        }

    }

    public async update(data : TableData) : Promise<number | null> {

        this.setFieldsAndValuesFromData(data);

        this.queryBuilder.changeOperation(CRUD_OPERATION.UPDATE);

        this.provider.setSchema(this.queryBuilder.getSchema());

        try {

            this.provider.validation();

            return await this.provider.update();

        }

        catch (errorInstance) {

            const exceptionReader = new ExceptionReader(errorInstance);

            exceptionReader.read();

            return null;

        }

    }

    public async delete() : Promise<number | null> {

        this.queryBuilder.changeOperation(CRUD_OPERATION.DELETE);

        this.provider.setSchema(this.queryBuilder.getSchema());

        try {

            this.provider.validation();

            return await this.provider.delete();

        }

        catch (errorInstance) {

            const exceptionReader = new ExceptionReader(errorInstance);

            exceptionReader.read();

            return null;

        }

    }

    public async first() : Promise<Schema | null> {

        const result = await this.get();

        if (result !== null && result.length > 0) {

            return result[0];

        }

        return null;

    }

    protected setFieldsAndValuesFromData(data : TableData) : void {

        const fields = [], values = [];

        for (const key in data) {

            fields.push(key);

            values.push(data[key]);

        }

        this.queryBuilder.selectMain().setFields(fields);

        this.queryBuilder.selectMain().setValues(values);

    }

    protected createProvider() : DatabaseProvider | never {

        switch (Model.config.engine) {

            case "postgre":

                return new PostgresqlDatabaseProvider(Model.config);

            default:

                throw new DatabaseProviderUnsupported(Model.config.engine);

        }

    }

    protected get getTable() : string {

        return this.table;

    }

    public static setConfig(config : DatabaseConfig) : void {

        Model.config = config;

    }

}