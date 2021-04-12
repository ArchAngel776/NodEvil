"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const String_1 = require("../../Data/Statics/String");
class ExceptionReader {
    constructor(errorInstance) {
        this.errorInstance = errorInstance;
    }
    writeSection(content, end = String_1.STRING.EMPTY) {
        console.error(`\n${content}${end}`);
    }
    read() {
        this.writeSection(this.errorInstance.name, ":");
        this.writeSection(this.errorInstance.message);
        this.writeSection(this.errorInstance.stack);
    }
}
exports.default = ExceptionReader;
//# sourceMappingURL=ExceptionReader.js.map