import HttpRequestBody from "../../Data/Structures/HttpRequestBody";
import HttpRequestHeaders from "../../Data/Structures/HttpRequestHeaders";

export default abstract class ClientProvider {

    protected url : string;

    protected headers : HttpRequestHeaders;

    protected body : HttpRequestBody;

    public constructor(url : string) {

        this.url = url;

        this.headers = {};

        this.body = {};

    }

    public setUrl(url : string) : void {

        this.url = url;

    }

    public setHeaders(headers : HttpRequestHeaders) : void {

        this.headers = headers;

    }

    public setBody(body : HttpRequestBody) : void {

        this.body = body;

    }

    public abstract get() : Promise<any>;

    public abstract post() : Promise<any>;

}