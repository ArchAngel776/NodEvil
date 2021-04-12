"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function DBValue(value) {
    if (typeof value === "string") {
        return `'${value}'`;
    }
    else if (value === null) {
        return "NULL";
    }
    else {
        return value.toString();
    }
}
exports.default = DBValue;
//# sourceMappingURL=DBValue.js.map