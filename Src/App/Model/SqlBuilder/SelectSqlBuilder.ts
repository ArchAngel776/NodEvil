import { STRING } from "../../../Data/Statics/String";
import SqlBuilder from "../SqlBuilder";

export default class SelectSqlBuilder extends SqlBuilder {

    public build() : string {

        const result = "SELECT " + this.getMainFields() + this.getJoinFields() + " FROM " + this.schema.main.tableName + this.joining() + this.where() + ";";

        return result;

    }

    protected getMainFields() : string {

        const result = (this.schema.main.fields.length > 0 || this.schema.join.joining) ? 

        this.schema.main.fields.map(field => this.schema.main.tableName + "." + field).join(", ") :

        "*";

        return result;

    }

    protected getJoinFields() : string {

        if (!this.schema.join.joining) {

            return STRING.EMPTY;

        }

        const result = (this.schema.main.fields.length > 0 ? ", " : " ") + this.schema.join.fields.map(field => this.schema.join.tableName + "." + field).join(", ");

        return result;

    }

    protected joining() : string {

        if (!this.schema.join.joining) {

            return STRING.EMPTY;

        }

        const result = " FULL JOIN " + this.schema.join.tableName + " ON " + this.schema.main.tableName + "." + this.schema.join.on.left + " = " + this.schema.join.tableName + "." + this.schema.join.on.right;

        return result;

    }

}