"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QueryBuilder_1 = require("./Model/QueryBuilder");
class Model {
    //protected provider : DatabaseProvider;
    constructor() {
        this.queryBuilder = new QueryBuilder_1.default(this.getTable);
        //this.provider = this.createProvider();
    }
    from(tableName) {
        this.queryBuilder.selectMain().changeTable(tableName);
        return this;
    }
    select(...fields) {
        this.queryBuilder.selectMain().setFields(fields);
        return this;
    }
    join(tableName, left, right, ...fields) {
        this.queryBuilder.selectJoin().activeJoining();
        this.queryBuilder.selectJoin().changeTable(tableName);
        this.queryBuilder.selectJoin().setOn(left, right);
        this.queryBuilder.selectJoin().setFields(fields);
        return this;
    }
    where(field, value, operator = "=") {
        this.queryBuilder.selectFilter().setCondition(field, value, operator);
        return this;
    }
    or(field, value, operator = "=") {
        this.queryBuilder.selectFilter().addOrCondition(field, value, operator);
        return this;
    }
    and(field, value, operator = "=") {
        this.queryBuilder.selectFilter().addAndCondition(field, value, operator);
        return this;
    }
    insert(data) {
        const fields = [], values = [];
        for (const key in data) {
            fields.push(key);
            values.push(data[key]);
        }
        this.queryBuilder.changeOperation("create");
        this.queryBuilder.selectMain().setFields(fields);
        this.queryBuilder.selectMain().setValues(values);
    }
    get() {
        this.queryBuilder.changeOperation("read");
    }
    update(data) {
        const fields = [], values = [];
        for (const key in data) {
            fields.push(key);
            values.push(data[key]);
        }
        this.queryBuilder.changeOperation("update");
        this.queryBuilder.selectMain().setFields(fields);
        this.queryBuilder.selectMain().setValues(values);
    }
    delete() {
        this.queryBuilder.changeOperation("delete");
    }
    get getTable() {
        return this.table;
    }
}
exports.default = Model;
