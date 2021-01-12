"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Filter {
    constructor() {
        this.conditions = [];
        this.operators = [];
    }
    setCondition(field, value, operator = "=") {
        this.conditions = [];
        this.operators = [];
        this.conditions.push({ field, value, operator });
    }
    addOrCondition(field, value, operator = "=") {
        this.conditions.push({ field, value, operator });
        this.operators.push("OR");
    }
    addAndCondition(field, value, operator = "=") {
        this.conditions.push({ field, value, operator });
        this.operators.push("AND");
    }
    getSchema() {
        const result = {
            conditions: this.conditions,
            operators: this.operators
        };
        return result;
    }
}
exports.default = Filter;
