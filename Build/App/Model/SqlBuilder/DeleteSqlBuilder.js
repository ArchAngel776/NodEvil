"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SqlBuilder_1 = require("../SqlBuilder");
class DeleteSqlBuilder extends SqlBuilder_1.default {
    build() {
        const result = "DELETE FROM " + this.schema.main.tableName + this.where() + ";";
        return result;
    }
}
exports.default = DeleteSqlBuilder;
//# sourceMappingURL=DeleteSqlBuilder.js.map