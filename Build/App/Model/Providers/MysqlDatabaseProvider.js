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
const DatabaseProvider_1 = require("../DatabaseProvider");
const SelectSqlBuilder_1 = require("../SqlBuilder/SelectSqlBuilder");
const MySql = require("mysql");
const InsertSqlBuilder_1 = require("../SqlBuilder/InsertSqlBuilder");
const UpdateSqlBuilder_1 = require("../SqlBuilder/UpdateSqlBuilder");
const DeleteSqlBuilder_1 = require("../SqlBuilder/DeleteSqlBuilder");
class MysqlDatabaseProvider extends DatabaseProvider_1.default {
    getConfig() {
        return {
            host: this.config.host,
            port: this.config.port,
            user: this.config.username,
            password: this.config.password,
            database: this.config.dbname
        };
    }
    operation(SqlBuilder) {
        return new Promise(resolve => {
            const connection = MySql.createConnection(this.getConfig());
            connection.connect((error) => {
                if (error)
                    throw error;
                connection.query(new SqlBuilder(this.queryBuilderSchema).build(), (error, result) => {
                    if (error)
                        throw error;
                    connection.end();
                    resolve(result);
                });
            });
        });
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.operation(InsertSqlBuilder_1.default);
            return result.affectedRows;
        });
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.operation(SelectSqlBuilder_1.default);
            return result;
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.operation(UpdateSqlBuilder_1.default);
            return result.affectedRows;
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.operation(DeleteSqlBuilder_1.default);
            return result.affectedRows;
        });
    }
}
exports.default = MysqlDatabaseProvider;
