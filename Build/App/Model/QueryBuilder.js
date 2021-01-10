"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QueryBuilder {
    constructor(mainTable) {
        this.mainTable = mainTable;
        this.fields = [];
        this.values = [];
    }
    changeMainTable(mainTable) {
        this.mainTable = mainTable;
    }
    setFields(fields) {
        this.fields = fields;
    }
    setValues(values) {
        this.values = values;
    }
}
exports.default = QueryBuilder;
