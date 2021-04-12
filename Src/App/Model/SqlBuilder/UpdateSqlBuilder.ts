import DBValue from "../DBValue";
import SqlBuilder from "../SqlBuilder";

export default class UpdateSqlBuilder extends SqlBuilder {

    public build() : string {

        const result = "UPDATE " + this.schema.main.tableName + this.set() + this.where() + ";";

        return result;

    }

    protected set() : string {

        const elements = [];

        for (let i = 0; i < this.schema.main.fields.length; i++) {

            elements.push(`${this.schema.main.fields[i]} = ${DBValue(this.schema.main.values[i])}`);

        }

        const result = " SET " + elements.join(", ");

        return result;

    }

}