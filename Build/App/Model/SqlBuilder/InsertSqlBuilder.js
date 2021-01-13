"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SqlBuilder_1 = require("../SqlBuilder");
class InsertSqlBuilder extends SqlBuilder_1.default {
    build() {
        const result = "INSERT INTO " + this.schema.main.tableName + this.names() + this.values() + ";";
        return result;
    }
    names() {
        const result = " (" + this.schema.main.fields.join(", ") + ")";
        return result;
    }
    values() {
        const result = " VALUES (" + this.schema.main.values.map(value => `"${value}"`).join(", ") + ")";
        return result;
    }
}
exports.default = InsertSqlBuilder;
