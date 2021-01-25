"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Storage {
    constructor() {
        this.store = {};
    }
    has(sessionToken) {
        return this.store[sessionToken] !== undefined;
    }
    get(sessionToken) {
        return this.store[sessionToken];
    }
    set(sessionToken, cookie) {
        this.store[sessionToken] = cookie;
    }
    delete(sessionToken) {
        delete this.store[sessionToken];
    }
    static get(sessionToken) {
        if (Storage.instance === undefined) {
            Storage.instance = new Storage();
        }
        if (Storage.instance.has(sessionToken)) {
            const result = Storage.instance.get(sessionToken);
            Storage.instance.delete(sessionToken);
            return result;
        }
        return {};
    }
    static set(sessionToken, cookie) {
        if (Storage.instance === undefined) {
            Storage.instance = new Storage();
        }
        if (Storage.instance.has(sessionToken)) {
            return false;
        }
        Storage.instance.set(sessionToken, cookie);
        return true;
    }
    static getForSocket(sessionToken) {
        if (Storage.instance === undefined) {
            Storage.instance = new Storage();
        }
        if (Storage.instance.has(sessionToken)) {
            const result = Storage.instance.get(sessionToken);
            return result;
        }
        return {};
    }
}
exports.default = Storage;
