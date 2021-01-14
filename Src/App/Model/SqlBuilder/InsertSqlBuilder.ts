import SqlBuilder from "../SqlBuilder";

export default class InsertSqlBuilder extends SqlBuilder {

    public build() : string {

        const result = "INSERT INTO " + this.schema.main.tableName + this.names() + this.values() + ";";

        return result;

    }

    protected names() : string {

        const result = " (" + this.schema.main.fields.join(", ") + ")";

        return result;

    }

    protected values() : string {

        const result = " VALUES (" + this.schema.main.values.map(value => `'${value}'`).join(", ") + ")";

        return result;

    }

}