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
const pg_1 = require("pg");
const InsertSqlBuilder_1 = require("../SqlBuilder/InsertSqlBuilder");
const UpdateSqlBuilder_1 = require("../SqlBuilder/UpdateSqlBuilder");
const DeleteSqlBuilder_1 = require("../SqlBuilder/DeleteSqlBuilder");
class PostgresqlDatabaseProvider extends DatabaseProvider_1.default {
    constructor(config) {
        super(config);
        this.client = new pg_1.Client({
            host: this.config.host,
            port: this.config.port,
            user: this.config.username,
            password: this.config.password,
            database: this.config.dbname
        });
    }
    create() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.connect();
            const sqlBuilder = new InsertSqlBuilder_1.default(this.queryBuilderSchema);
            const result = yield this.client.query(sqlBuilder.build());
            yield this.client.end();
            return result.rowCount;
        });
    }
    read() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.connect();
            const sqlBuilder = new SelectSqlBuilder_1.default(this.queryBuilderSchema);
            console.log(sqlBuilder.build());
            const result = yield this.client.query(sqlBuilder.build());
            yield this.client.end();
            return result.rows;
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.connect();
            const sqlBuilder = new UpdateSqlBuilder_1.default(this.queryBuilderSchema);
            const result = yield this.client.query(sqlBuilder.build());
            yield this.client.end();
            return result.rows;
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.connect();
            const sqlBuilder = new DeleteSqlBuilder_1.default(this.queryBuilderSchema);
            const result = yield this.client.query(sqlBuilder.build());
            yield this.client.end();
            return result.rowCount;
        });
    }
}
exports.default = PostgresqlDatabaseProvider;
