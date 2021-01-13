import SqlBuilder from "../SqlBuilder";

export default class DeleteSqlBuilder extends SqlBuilder {

    public build() : string {

        const result = "DELETE FROM " + this.schema.main.tableName + this.where() + ";";

        return result;

    }

}