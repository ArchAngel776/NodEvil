"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const String_1 = require("../../../Data/Statics/String");
const Main_1 = require("./Main");
class Join extends Main_1.default {
    constructor() {
        super(String_1.STRING.EMPTY);
        this.joining = false;
        this.on = {
            left: String_1.STRING.EMPTY,
            right: String_1.STRING.EMPTY
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
//# sourceMappingURL=Join.js.map