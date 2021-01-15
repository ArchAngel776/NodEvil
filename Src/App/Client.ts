import { HTTP_VERSION } from "../Data/Statics/HttpVersion";
import { STRING } from "../Data/Statics/String";
import HttpRequestBody from "../Data/Structures/HttpRequestBody";
import HttpRequestHeaders from "../Data/Structures/HttpRequestHeaders";
import { HttpVersion } from "../Data/Types/HttpVersion";
import ClientProvider from "./Client/ClientProvider";
import Http2ClientProvider from "./Client/Providers/Http2ClientProvider";
import HttpClientProvider from "./Client/Providers/HttpClientProvider";
import HttpVersionUnsupported from "./Server/Exception/HttpVersionUnsupported";

export default class Client {

    protected httpVersion : HttpVersion;

    protected provider : ClientProvider;

    public constructor(httpVersion : HttpVersion, url : string = STRING.EMPTY) {

        this.httpVersion = httpVersion;

        this.provider = this.createProvider(url);

    }

    public url(url : string) : Client {

        this.provider.setUrl(url);

        return this;

    }

    public headers(headers : HttpRequestHeaders) : Client {

        this.provider.setHeaders(headers);

        return this;

    }

    public body(body : HttpRequestBody) : Client {

        this.provider.setBody(body);

        return this;

    }

    public async get() : Promise<any> {

        const result = await this.provider.get();

        return result;

    }

    public async post() : Promise<any> {

        const result = await this.provider.post();

        return result;

    }

    protected createProvider(url : string) : ClientProvider | never {

        switch (this.httpVersion) {

            case HTTP_VERSION.v1_1:

                return new HttpClientProvider(url);

            case HTTP_VERSION.v2_0:

                return new Http2ClientProvider(url);

            default:

                throw new HttpVersionUnsupported(this.httpVersion);

        }

    }

}