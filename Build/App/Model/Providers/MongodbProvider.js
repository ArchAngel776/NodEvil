"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DatabaseProvider_1 = require("../DatabaseProvider");
const MongoDB = require("mongodb");
class MongodbDatabaseProvider extends DatabaseProvider_1.default {
    constructor(config) {
        super(config);
        this.client = new MongoDB.MongoClient(`mongodb://${this.config.host}:${this.config.port}/`, {
            useUnifiedTopology: true
        });
    }
    create() {
    }
    read() {
    }
    update() {
    }
    delete() {
    }
}
exports.default = MongodbDatabaseProvider;
