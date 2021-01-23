"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ValidationType_1 = require("./Validator/Exception/ValidationType");
class Validator {
    constructor(data) {
        this.data = data;
    }
    validation(setup) {
        for (const field in setup) {
            switch (setup[field].type) {
                case "number":
                default:
                    throw new ValidationType_1.default(setup[field].type);
            }
        }
        return true;
    }
}
exports.default = Validator;
