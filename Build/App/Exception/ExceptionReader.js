"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExceptionReader {
    constructor(errorInstance) {
        this.errorInstance = errorInstance;
    }
    writeSection(content, end = "") {
        console.error(`\n${content}${end}`);
    }
    read() {
        this.writeSection(this.errorInstance.name, ":");
        this.writeSection(this.errorInstance.message);
        this.writeSection(this.errorInstance.stack);
    }
}
exports.default = ExceptionReader;
