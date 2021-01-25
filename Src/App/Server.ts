import Init from "../Data/Interfaces/Init";
import { HTTP_VERSION } from "../Data/Statics/HttpVersion";
import ServerConfig from "../Data/Structures/ServerConfig";
import { HttpVersion } from "../Data/Types/HttpVersion";
import ExceptionReader from "./Exception/ExceptionReader";
import Model from "./Model";
import HttpVersionUnsupported from "./Server/Exception/HttpVersionUnsupported";
import Core from "./Server/Foundations/Core";
import Http2Core from "./Server/Foundations/Http2Core";
import HttpCore from "./Server/Foundations/HttpCore";
import SocketServer from "./Channel/SocketServer";
import Ssl from "./Server/Ssl";
import ConfigValidator from "./Server/Validation/ConfigValidator";
import Router from "./Router";

export default class Server implements Init {

    protected config : ServerConfig;

    protected router : Router;

    protected validator : ConfigValidator;

    public constructor(config : ServerConfig) {

        this.config = config;

        this.router = new Router();

        this.validator = new ConfigValidator(config);

    }

    public init() : void {

        try {

            this.validator.validate();

            new SocketServer(this.getCore(this.config.httpVersion).listen(this.config.port))
                .addRouting(this.router)
                .init();

            Model.setConfig(this.config.database);

        }

        catch (errorInstance) {

            const exceptionReader = new ExceptionReader(errorInstance);

            exceptionReader.read();

        }

    }

    public withRouter(router : Router) : Server {

        this.router = router;

        return this;

    }

    protected getCore(httpVersion : HttpVersion) : Core | never {

        switch (httpVersion) {

            case HTTP_VERSION.v1_1:

                return new HttpCore(httpVersion, new Ssl(this.config.ssl).flush())
                    .routing(this.router);

            case HTTP_VERSION.v2_0:

                return new Http2Core(httpVersion, new Ssl(this.config.ssl).flush())
                    .routing(this.router);

            default:

                throw new HttpVersionUnsupported(httpVersion);

        }

    }

}