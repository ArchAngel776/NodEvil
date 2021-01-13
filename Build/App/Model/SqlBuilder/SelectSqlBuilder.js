"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const String_1 = require("../../../Data/Statics/String");
const SqlBuilder_1 = require("../SqlBuilder");
class SelectSqlBuilder extends SqlBuilder_1.default {
    build() {
        const result = "SELECT " + this.getMainFields() + this.getJoinFields() + " FROM " + this.schema.main.tableName + this.joining() + this.where() + ";";
        return result;
    }
    getMainFields() {
        const result = (this.schema.main.fields.length > 0 || this.schema.join.joining) ?
            this.schema.main.fields.map(field => this.schema.main.tableName + "." + field).join(", ") :
            "*";
        return result;
    }
    getJoinFields() {
        if (!this.schema.join.joining) {
            return String_1.STRING.EMPTY;
        }
        const result = (this.schema.main.fields.length > 0 ? ", " : " ") + this.schema.join.fields.map(field => this.schema.join.tableName + "." + field).join(", ");
        return result;
    }
    joining() {
        if (!this.schema.join.joining) {
            return String_1.STRING.EMPTY;
        }
        const result = " FULL JOIN " + this.schema.join.tableName + " ON " + this.schema.main.tableName + "." + this.schema.join.on.left + " = " + this.schema.join.tableName + "." + this.schema.join.on.right;
        return result;
    }
}
exports.default = SelectSqlBuilder;
