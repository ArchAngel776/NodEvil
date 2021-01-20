import * as Cookie from "cookie";
import CookieStructure from "../../Data/Structures/CookieStructure";
import Storage from "./Session/Storage";

export default class Session {

    protected cookies : CookieStructure;

    public constructor(cookies : string) {

        this.cookies = Storage.get(Cookie.parse(cookies).session || "");

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

}