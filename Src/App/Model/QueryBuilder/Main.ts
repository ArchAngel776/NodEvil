import TableSchema from "../../../Data/Structures/TableSchema";
import { DatabaseValue } from "../../../Data/Types/DatabaseValue";

export default class Main {

    protected tableName : string;

    protected fields : string[];

    protected values : DatabaseValue[];

    public constructor(tableName : string) {

        this.tableName = tableName;

        this.fields = [];

        this.values = [];

    }

    public changeTable(tableName : string) : void {

        this.tableName = tableName;

    }

    public setFields(fields : string[]) : void {

        this.fields = fields;

    }

    public setValues(values : DatabaseValue[]) : void {

        this.values = values;

    }

    public getSchema() : TableSchema {

        const result : TableSchema = {
            tableName: this.tableName,
            fields: this.fields,
            values: this.values
        };

        return result;

    }

}