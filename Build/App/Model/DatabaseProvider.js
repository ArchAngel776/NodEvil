"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CrudOperation_1 = require("../../Data/Statics/CrudOperation");
const String_1 = require("../../Data/Statics/String");
const QueryBuilderOperationRequired_1 = require("./Exception/QueryBuilderOperationRequired");
const QueryBuilderUndefined_1 = require("./Exception/QueryBuilderUndefined");
class DatabaseProvider {
    constructor(config) {
        this.config = config;
        this.queryBuilderSchema = null;
    }
    setSchema(queryBuilderSchema) {
        this.queryBuilderSchema = queryBuilderSchema;
    }
    validation() {
        if (this.queryBuilderSchema === null) {
            throw new QueryBuilderUndefined_1.default();
        }
        if (this.queryBuilderSchema.operation === null) {
            throw new QueryBuilderOperationRequired_1.default();
        }
        if ((this.queryBuilderSchema.operation === CrudOperation_1.CRUD_OPERATION.CREATE || this.queryBuilderSchema.operation === CrudOperation_1.CRUD_OPERATION.UPDATE) && this.queryBuilderSchema.main.fields.length !== this.queryBuilderSchema.main.values.length) {
            throw new Error();
        }
        if (this.queryBuilderSchema.join.joining && this.queryBuilderSchema.operation === CrudOperation_1.CRUD_OPERATION.READ) {
            if (this.queryBuilderSchema.join.tableName === String_1.STRING.EMPTY) {
                throw new Error();
            }
            if (this.queryBuilderSchema.join.on.left === String_1.STRING.EMPTY || this.queryBuilderSchema.join.on.right === String_1.STRING.EMPTY) {
                throw new Error();
            }
        }
        if (this.queryBuilderSchema.filter.conditions.length > 0 && this.queryBuilderSchema.filter.conditions.length !== this.queryBuilderSchema.filter.operators.length + 1) {
            throw new Error();
        }
    }
}
exports.default = DatabaseProvider;
//# sourceMappingURL=DatabaseProvider.js.map