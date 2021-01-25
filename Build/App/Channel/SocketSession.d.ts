import CookieStructure from "../../Data/Structures/CookieStructure";
export default class SocketSession {
    protected cookies: CookieStructure;
    constructor(cookies: string);
    has(key: string): boolean;
    get(key: string): string;
    set(key: string, value: string): void;
    delete(key: string): void;
}
//# sourceMappingURL=SocketSession.d.ts.map