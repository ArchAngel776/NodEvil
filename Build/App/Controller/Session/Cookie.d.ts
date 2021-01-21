import { CookieSameSite } from "../../../Data/Types/CookieSameSite";
export default class Cookie {
    protected name: string;
    protected value: string;
    protected path: string;
    protected sameSite: CookieSameSite;
    protected httpOnly: boolean;
    protected secure: boolean;
    constructor(name: string);
    Set(value: string): Cookie;
    Origin(path: string): Cookie;
    SameSite(sameSite: CookieSameSite): Cookie;
    HttpOnly(): Cookie;
    Secure(): Cookie;
    Extract(): string;
}
//# sourceMappingURL=Cookie.d.ts.map