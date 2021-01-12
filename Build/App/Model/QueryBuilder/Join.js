"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Main_1 = require("./Main");
class Join extends Main_1.default {
    constructor() {
        super("");
        this.joining = false;
        this.on = {
            left: "",
            right: ""
        };
    }
    activeJoining() {
        this.joining = true;
    }
    setOn(left, right) {
        this.on.left = left;
        this.on.right = right;
    }
    join() {
        return this.joining;
    }
    getSchema() {
        const result = {
            joining: this.joining,
            tableName: this.tableName,
            fields: this.fields,
            values: this.values,
            on: this.on
        };
        return result;
    }
}
exports.default = Join;
