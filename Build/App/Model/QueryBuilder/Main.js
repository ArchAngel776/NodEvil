"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Main {
    constructor(tableName) {
        this.tableName = tableName;
        this.fields = [];
        this.values = [];
    }
    changeTable(tableName) {
        this.tableName = tableName;
    }
    setFields(fields) {
        this.fields = fields;
    }
    setValues(values) {
        this.values = values;
    }
    getSchema() {
        const result = {
            tableName: this.tableName,
            fields: this.fields,
            values: this.values
        };
        return result;
    }
}
exports.default = Main;
//# sourceMappingURL=Main.js.map