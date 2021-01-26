import * as Cookies from "cookie";
import CookieStructure from "../../Data/Structures/CookieStructure";
import JsonWebTokenDecoder from "./Session/JsonWebTokenDecoder";
import JsonWebTokenEncoder from "./Session/JsonWebTokenEncoder";

export default class Session {

    protected cookies : CookieStructure;

    public constructor(cookies : string) {

        this.cookies = new JsonWebTokenDecoder(Cookies.parse(cookies).session || "").extractData();

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

    public flushToken() : string {

        return new JsonWebTokenEncoder({ typ: "JWT", alg: "HS256" }).getToken(this.cookies);

    }

}