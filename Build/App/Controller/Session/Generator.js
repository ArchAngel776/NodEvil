"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const String_1 = require("../../../Data/Statics/String");
class Generator {
    constructor(length) {
        this.length = length;
    }
    append(source) {
        if (source.length === this.length) {
            return source;
        }
        const code = (Math.random() * 74) + 48;
        if ((code > 57 && code < 65) || (code > 90 && code < 97)) {
            return this.append(source);
        }
        return this.append([...source, String.fromCharCode(code)]);
    }
    generate() {
        const source = this.append([]);
        const result = source.join(String_1.STRING.EMPTY);
        return result;
    }
}
exports.default = Generator;
