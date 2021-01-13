"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Filter_1 = require("./QueryBuilder/Filter");
const Join_1 = require("./QueryBuilder/Join");
const Main_1 = require("./QueryBuilder/Main");
class QueryBuilder {
    constructor(tableName) {
        this.main = new Main_1.default(tableName);
        this.join = new Join_1.default();
        this.filter = new Filter_1.default();
        this.operation = null;
    }
    selectMain() {
        return this.main;
    }
    selectJoin() {
        return this.join;
    }
    selectFilter() {
        return this.filter;
    }
    changeOperation(operation) {
        this.operation = operation;
    }
    getSchema() {
        const result = {
            main: this.main.getSchema(),
            join: this.join.getSchema(),
            filter: this.filter.getSchema(),
            operation: this.operation
        };
        return result;
    }
}
exports.default = QueryBuilder;
