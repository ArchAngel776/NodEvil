import * as http2 from "http2";
import { HTTP_VERSION } from "../../../Data/Statics/HttpVersion";
import SslStructure from "../../../Data/Structures/SslStructure";
import ExceptionReader from "../../Exception/ExceptionReader";
import Routing from "../../Router/Routing";
import Request from "../Stream/Request";
import Response from "../Stream/Response";
import Core from "./Core";

export default class Http2Core extends Core {

    protected async requestHandler(request : http2.Http2ServerRequest, response : http2.Http2ServerResponse) : Promise<void> {

        try {

            const routing = new Routing(new Request(HTTP_VERSION.v2_0, request), new Response(HTTP_VERSION.v2_0, response));

            await routing.init();

        }

        catch (errorInstance) {

            const exceptionReader = new ExceptionReader(errorInstance);

            exceptionReader.read();

        }

    }

    protected createSecured(ssl : SslStructure) : http2.Http2SecureServer {

        return http2.createSecureServer({...ssl, allowHTTP1: true}, this.requestHandler);

    }

    protected createUnsecured() : http2.Http2Server {

        return http2.createServer(this.requestHandler);

    }

}