import { ServerResponse } from "http";
import { Http2ServerResponse } from "http2";
import { HTTP_VERSION } from "../../../Data/Statics/HttpVersion";
import ViewResponse from "../../../Data/Structures/ViewResponse";
import { HttpPossibleResponse } from "../../../Data/Types/HttpPossibleResponse";
import { HttpVersion } from "../../../Data/Types/HttpVersion";
import { MimeType } from "../../../Data/Types/MimeType";
import HttpVersionUnsupported from "../Exception/HttpVersionUnsupported";
import Http2ResponseProvider from "./Response/Providers/Http2ResponseProvider";
import HttpResponseProvider from "./Response/Providers/HttpResponseProvider";
import ResponseProvider from "./Response/ResponseProvider";

export default class Response {

    protected provider : ResponseProvider;

    public constructor(version : HttpVersion, core : HttpPossibleResponse) {

        this.provider = this.createProvider(version, core);

    }

    public sendView(viewResponse : ViewResponse) : void {

        this.provider.sendView(viewResponse);

    }

    public sendFile(fileContent : string | Buffer, mimeType: MimeType) : void {

        this.provider.sendFile(fileContent, mimeType);

    }

    public sendNotFound() : void {

        this.provider.sendNotFound();

    }

    protected createProvider(version : HttpVersion, core : HttpPossibleResponse) : ResponseProvider | never {

        switch (version) {

            case HTTP_VERSION.v1_1:

                return new HttpResponseProvider(core as ServerResponse);

            case HTTP_VERSION.v2_0:

                return new Http2ResponseProvider(core as Http2ServerResponse);

            default:

                throw new HttpVersionUnsupported(version);

        }

    }

}