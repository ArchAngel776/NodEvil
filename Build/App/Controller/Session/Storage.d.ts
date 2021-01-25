import CookieStructure from "../../../Data/Structures/CookieStructure";
import SessionStore from "../../../Data/Structures/SessionStore";
export default class Storage {
    protected static instance: Storage;
    protected store: SessionStore;
    constructor();
    has(sessionToken: string): boolean;
    get(sessionToken: string): CookieStructure;
    set(sessionToken: string, cookie: CookieStructure): void;
    delete(sessionToken: string): void;
    static get(sessionToken: string): CookieStructure;
    static set(sessionToken: string, cookie: CookieStructure): boolean;
    static getForSocket(sessionToken: string): CookieStructure;
}
//# sourceMappingURL=Storage.d.ts.map