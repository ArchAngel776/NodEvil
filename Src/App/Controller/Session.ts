import * as Cookies from "cookie";
import CookieStructure from "../../Data/Structures/CookieStructure";
import Cookie from "./Session/Cookie";
import * as crypto from "crypto";

export default class Session {

    protected cookies : CookieStructure;

    public constructor(cookies : string) {

        this.cookies = {};

        Cookies.parse(cookies).session || "";

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