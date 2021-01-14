"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const String_1 = require("../../Data/Statics/String");
class SqlBuilder {
    constructor(schema) {
        this.schema = schema;
    }
    where() {
        if (this.schema.filter.conditions.length === 0) {
            return String_1.STRING.EMPTY;
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
exports.default = SqlBuilder;
