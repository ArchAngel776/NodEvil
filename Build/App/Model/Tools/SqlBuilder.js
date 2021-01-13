"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CrudOperation_1 = require("../../../Data/Statics/CrudOperation");
const CrudOperationUnsupported_1 = require("../Exception/CrudOperationUnsupported");
class SqlBuilder {
    constructor(queryBuilderSchema) {
        this.queryBuilderSchema = queryBuilderSchema;
    }
    build() {
        switch (this.queryBuilderSchema.operation) {
            case CrudOperation_1.CRUD_OPERATION.CREATE:
                return this.insert();
            case CrudOperation_1.CRUD_OPERATION.READ:
                return this.select();
            case CrudOperation_1.CRUD_OPERATION.UPDATE:
                return this.update();
            case CrudOperation_1.CRUD_OPERATION.DELETE:
                return this.delete();
            default:
                throw new CrudOperationUnsupported_1.default(this.queryBuilderSchema.operation);
        }
    }
    select() {
    }
    insert() {
    }
    delete() {
    }
    update() {
    }
}
exports.default = SqlBuilder;
