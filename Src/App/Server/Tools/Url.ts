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

}