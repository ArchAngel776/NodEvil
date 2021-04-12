"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const CrudOperation_1 = require("../Data/Statics/CrudOperation");
const ExceptionReader_1 = require("./Exception/ExceptionReader");
const DatabaseProviderUnsupported_1 = require("./Model/Exception/DatabaseProviderUnsupported");
const PostgresqlDatabaseProvider_1 = require("./Model/Providers/PostgresqlDatabaseProvider");
const QueryBuilder_1 = require("./Model/QueryBuilder");
class Model {
    constructor() {
        this.queryBuilder = new QueryBuilder_1.default(this.getTable);
        this.provider = this.createProvider();
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
        return __awaiter(this, void 0, void 0, function* () {
            this.setFieldsAndValuesFromData(data);
            this.queryBuilder.changeOperation(CrudOperation_1.CRUD_OPERATION.CREATE);
            this.provider.setSchema(this.queryBuilder.getSchema());
            try {
                this.provider.validation();
                return yield this.provider.create();
            }
            catch (errorInstance) {
                const exceptionReader = new ExceptionReader_1.default(errorInstance);
                exceptionReader.read();
                return null;
            }
        });
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            this.queryBuilder.changeOperation(CrudOperation_1.CRUD_OPERATION.READ);
            this.provider.setSchema(this.queryBuilder.getSchema());
            try {
                this.provider.validation();
                return yield this.provider.read();
            }
            catch (errorInstance) {
                const exceptionReader = new ExceptionReader_1.default(errorInstance);
                exceptionReader.read();
                return null;
            }
        });
    }
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.setFieldsAndValuesFromData(data);
            this.queryBuilder.changeOperation(CrudOperation_1.CRUD_OPERATION.UPDATE);
            this.provider.setSchema(this.queryBuilder.getSchema());
            try {
                this.provider.validation();
                return yield this.provider.update();
            }
            catch (errorInstance) {
                const exceptionReader = new ExceptionReader_1.default(errorInstance);
                exceptionReader.read();
                return null;
            }
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            this.queryBuilder.changeOperation(CrudOperation_1.CRUD_OPERATION.DELETE);
            this.provider.setSchema(this.queryBuilder.getSchema());
            try {
                this.provider.validation();
                return yield this.provider.delete();
            }
            catch (errorInstance) {
                const exceptionReader = new ExceptionReader_1.default(errorInstance);
                exceptionReader.read();
                return null;
            }
        });
    }
    first() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.get();
            if (result !== null && result.length > 0) {
                return result[0];
            }
            return null;
        });
    }
    setFieldsAndValuesFromData(data) {
        const fields = [], values = [];
        for (const key in data) {
            fields.push(key);
            values.push(data[key]);
        }
        this.queryBuilder.selectMain().setFields(fields);
        this.queryBuilder.selectMain().setValues(values);
    }
    createProvider() {
        switch (Model.config.engine) {
            case "postgre":
                return new PostgresqlDatabaseProvider_1.default(Model.config);
            default:
                throw new DatabaseProviderUnsupported_1.default(Model.config.engine);
        }
    }
    get getTable() {
        return this.table;
    }
    static setConfig(config) {
        Model.config = config;
    }
}
exports.default = Model;
//# sourceMappingURL=Model.js.map