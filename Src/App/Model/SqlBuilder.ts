import { STRING } from "../../Data/Statics/String";
import QueryBuilderSchema from "../../Data/Structures/QueryBuilderSchema";

export default abstract class SqlBuilder {

    protected schema : QueryBuilderSchema;

    public constructor(schema : QueryBuilderSchema) {

        this.schema = schema;

    }

    public abstract build() : string;

    protected where() : string {

        if (this.schema.filter.conditions.length === 0) {

            return STRING.EMPTY;

        }

        const conditions = this.schema.filter.conditions.map(condition => {

            return condition.field + " " + condition.operator + " " + ((condition.value === null) ? "NULL" : (typeof condition.value === "string") ? `'${condition.value}'` : condition.value);

        });

        const elements = [];

        for (let i = 0; i < conditions.length; i++) {

            elements.push(conditions[i]);

            if (i < conditions.length - 1) {

                elements.push(this.schema.filter.operators[i]);

            }

        }

        const result = " WHERE " + elements.join(" ");

        return result;

    }

}