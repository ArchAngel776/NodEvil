import * as qs from "querystring";
import HttpRequestBody from "../../../Data/Structures/HttpRequestBody";

export default class Url {

    protected fullPath : string;

    public constructor(fullPath : string) {

        this.fullPath = fullPath;

    }

    public pure() : string {

        const result = this.fullPath.split("?")[0];

        return result;

    }

    public params() : HttpRequestBody {

        const paramString = this.fullPath.split("?")[1];

        const result = JSON.parse(JSON.stringify(qs.parse(paramString)));

        return result;

    }

    public setParams(params : HttpRequestBody) : void {

        const segments = [];

        for (const key in params) segments.push(`${key}=${params[key]}`);

        this.fullPath = this.pure() + "?" + segments.join("&");

    }

    public full() : string {

        console.log(this.fullPath.split("/").splice(3, this.fullPath.split("/").length - 3));

        return this.fullPath;

    }

    public domain() : string {

        const segments = this.fullPath.split("/");

        const domainSegments = segments.splice(0, 3);

        const result = domainSegments.join("/");

        return result;

    }

    public path() : string {

        const segments = this.fullPath.split("/");

        const pathSegments = segments.splice(3, segments.length - 3);

        const result = "/" + pathSegments.join("/");

        return result;

    }

}