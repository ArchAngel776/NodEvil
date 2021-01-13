"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DatabaseProvider_1 = require("../DatabaseProvider");
const SelectSqlBuilder_1 = require("../SqlBuilder/SelectSqlBuilder");
class MysqlDatabaseProvider extends DatabaseProvider_1.default {
    create() {
    }
    read() {
        const sqlBuilder = new SelectSqlBuilder_1.default(this.queryBuilderSchema);
    }
    update() {
    }
    delete() {
    }
}
exports.default = MysqlDatabaseProvider;
