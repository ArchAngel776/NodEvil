"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DBValue_1 = require("../DBValue");
const SqlBuilder_1 = require("../SqlBuilder");
class UpdateSqlBuilder extends SqlBuilder_1.default {
    build() {
        const result = "UPDATE " + this.schema.main.tableName + this.set() + this.where() + ";";
        return result;
    }
    set() {
        const elements = [];
        for (let i = 0; i < this.schema.main.fields.length; i++) {
            elements.push(`${this.schema.main.fields[i]} = ${DBValue_1.default(this.schema.main.values[i])}`);
        }
        const result = " SET " + elements.join(", ");
        return result;
    }
}
exports.default = UpdateSqlBuilder;
//# sourceMappingURL=UpdateSqlBuilder.js.map