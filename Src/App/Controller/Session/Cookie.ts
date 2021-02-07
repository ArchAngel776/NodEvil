import { STRING } from "../../../Data/Statics/String";
import { CookieSameSite } from "../../../Data/Types/CookieSameSite";

export default class Cookie {

    protected name : string;

    protected value : string;

    protected path : string;

    protected expires : string;

    protected sameSite : CookieSameSite;

    protected httpOnly : boolean;

    protected secure : boolean;

    public constructor(name : string) {

        this.name = name;

        this.value = STRING.EMPTY;

        this.path = "/";

        this.expires = STRING.EMPTY;

        this.sameSite = "None";

        this.httpOnly = false;

        this.secure = false;

    }

    public Set(value : string) : Cookie {

        this.value = value;

        return this;

    }

    public Expires(date : Date) : Cookie {

        this.expires = "Expires=" + date.toUTCString() + "; ";

        return this;

    }

    public Path(path : string) : Cookie {

        this.path = path;

        return this;

    }

    public SameSite(sameSite : CookieSameSite) : Cookie {

        this.sameSite = sameSite;

        return this;

    }

    public HttpOnly() : Cookie {

        this.httpOnly = true;

        return this;

    }

    public Secure() : Cookie {

        this.secure = true;

        return this;

    }

    public Extract() : string {

        const result = `${this.name}=${this.value}; ${this.expires}Path=${this.path}; SameSite=${this.sameSite}; ${this.httpOnly ? "HttpOnly; " : STRING.EMPTY}${this.secure ? "Secure; " : STRING.EMPTY}`;

        return result;

    }

}