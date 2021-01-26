import CookieStructure from "../../Data/Structures/CookieStructure";
export default class Session {
    protected cookies: CookieStructure;
    constructor(cookies: string);
    has(key: string): boolean;
    get(key: string): string;
    set(key: string, value: string): void;
    delete(key: string): void;
    flushToken(): string;
}
//# sourceMappingURL=Session.d.ts.map