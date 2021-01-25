import CookieStructure from "../../../Data/Structures/CookieStructure";
import SessionStore from "../../../Data/Structures/SessionStore";

export default class Storage {

    protected static instance : Storage;

    protected store : SessionStore;

    public constructor() {

        this.store = {};

    }

    public has(sessionToken : string) : boolean {

        return this.store[sessionToken] !== undefined;

    }

    public get(sessionToken : string) : CookieStructure {

        return this.store[sessionToken];

    }

    public set(sessionToken : string, cookie : CookieStructure) : void {

        this.store[sessionToken] = cookie;

    }

    public delete(sessionToken : string) : void {

        delete this.store[sessionToken];

    }

    public static get(sessionToken : string) : CookieStructure {

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

    public static set(sessionToken : string, cookie : CookieStructure) : boolean {

        if (Storage.instance === undefined) {

            Storage.instance = new Storage();

        }

        if (Storage.instance.has(sessionToken)) {

            return false;

        }

        Storage.instance.set(sessionToken, cookie);

        return true;

    }

    public static getForSocket(sessionToken : string) : CookieStructure {

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