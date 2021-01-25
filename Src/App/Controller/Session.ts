import * as Cookies from "cookie";
import CookieStructure from "../../Data/Structures/CookieStructure";
import Cookie from "./Session/Cookie";
import Generator from "./Session/Generator";
import Storage from "./Session/Storage";

export default class Session {

    protected cookies : CookieStructure;

    public constructor(cookies : string) {

        this.cookies = Storage.get(Cookies.parse(cookies).session || "");

    }

    public has(key : string) : boolean {

        return this.cookies[key] !== undefined;

    }

    public get(key : string) : string {

        return this.cookies[key];

    }

    public set(key : string, value : string) : void {

        this.cookies[key] = value;

    }

    public delete(key : string) : void {

        delete this.cookies[key];

    }

    public flush() : CookieStructure {

        return this.cookies;

    }

    public save() : string {

        let sessionToken = new Generator(48).generate();

        while (!Storage.set(sessionToken, this.flush())) sessionToken = new Generator(48).generate();

        const result = new Cookie("session").Set(sessionToken).SameSite("Lax").HttpOnly().Secure().Extract()

        return result;

    }

}