"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QueryBuilder_1 = require("./Model/QueryBuilder");
class Model {
    //protected provider : DatabaseProvider;
    constructor() {
        this.queryBuilder = new QueryBuilder_1.default(this.getTable);
        //this.provider = this.createProvider();
    }
    get getTable() {
        return this.table;
    }
}
exports.default = Model;
