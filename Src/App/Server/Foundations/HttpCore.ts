import * as http from "http";
import * as https from "https";
import { HTTP_VERSION } from "../../../Data/Statics/HttpVersion";
import SslStructure from "../../../Data/Structures/SslStructure";
import ExceptionReader from "../../Exception/ExceptionReader";
import Routing from "../../Router/Routing";
import Request from "../Stream/Request";
import Response from "../Stream/Response";
import Core from "./Core";

export default class HttpCore extends Core {

    protected async requestHandler(request : http.IncomingMessage, response : http.ServerResponse) : Promise<void> {

        try {

            const routing = new Routing(new Request(HTTP_VERSION.v1_1, request), new Response(HTTP_VERSION.v1_1, response));

            await routing.init();

        }

        catch (errorInstance) {

            const exceptionReader = new ExceptionReader(errorInstance);

            exceptionReader.read();

        }

    }

    protected createSecured(ssl : SslStructure) : https.Server {

        return https.createServer(ssl, this.requestHandler);

    }

    protected createUnsecured() : http.Server {

        return http.createServer(this.requestHandler);

    }

}