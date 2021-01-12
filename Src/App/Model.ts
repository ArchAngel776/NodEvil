import TableData from "../Data/Structures/TableData";
import { DatabaseConditionOperator } from "../Data/Types/DatabaseConditionOperator";
import { DatabaseValue } from "../Data/Types/DatabaseValue";
import DatabaseProvider from "./Model/DatabaseProvider";
import QueryBuilder from "./Model/QueryBuilder";

export default abstract class Model {

    protected abstract table : string;

    protected queryBuilder : QueryBuilder;

    //protected provider : DatabaseProvider;

    public constructor() {

        this.queryBuilder = new QueryBuilder(this.getTable);

        //this.provider = this.createProvider();

    }

    public from(tableName : string) : Model {

        this.queryBuilder.selectMain().changeTable(tableName);

        return this;

    }

    public select(...fields : string[]) : Model {

        this.queryBuilder.selectMain().setFields(fields);

        return this;

    }

    public join(tableName : string, left : string, right : string, ...fields : string[]) : Model {

        this.queryBuilder.selectJoin().activeJoining();

        this.queryBuilder.selectJoin().changeTable(tableName);

        this.queryBuilder.selectJoin().setOn(left, right);

        this.queryBuilder.selectJoin().setFields(fields);

        return this;

    }

    public where(field : string, value : DatabaseValue, operator : DatabaseConditionOperator = "=") : Model {

        this.queryBuilder.selectFilter().setCondition(field, value, operator);

        return this;

    }

    public or(field : string, value : DatabaseValue, operator : DatabaseConditionOperator = "=") : Model {

        this.queryBuilder.selectFilter().addOrCondition(field, value, operator);

        return this;

    }

    public and(field : string, value : DatabaseValue, operator : DatabaseConditionOperator = "=") : Model {

        this.queryBuilder.selectFilter().addAndCondition(field, value, operator);

        return this;

    }

    public insert(data : TableData) : any {

        const fields = [], values = [];

        for (const key in data) {

            fields.push(key);

            values.push(data[key]);

        }

        this.queryBuilder.changeOperation("create");

        this.queryBuilder.selectMain().setFields(fields);

        this.queryBuilder.selectMain().setValues(values);

    }

    public get() : any {

        this.queryBuilder.changeOperation("read");

    }

    public update(data : TableData) : any {

        const fields = [], values = [];

        for (const key in data) {

            fields.push(key);

            values.push(data[key]);

        }

        this.queryBuilder.changeOperation("update");

        this.queryBuilder.selectMain().setFields(fields);

        this.queryBuilder.selectMain().setValues(values);

    }

    public delete() : any {

        this.queryBuilder.changeOperation("delete");

    }

    protected get getTable() : string {

        return this.table;

    }

}