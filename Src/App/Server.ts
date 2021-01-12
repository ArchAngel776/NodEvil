import Init from "../Data/Interfaces/Init";
import { HTTP_VERSION } from "../Data/Statics/HttpVersion";
import ServerConfig from "../Data/Structures/ServerConfig";
import { HttpVersion } from "../Data/Types/HttpVersion";
import ExceptionReader from "./Exception/ExceptionReader";
import HttpVersionUnsupported from "./Server/Exception/HttpVersionUnsupported";
import Core from "./Server/Foundations/Core";
import Http2Core from "./Server/Foundations/Http2Core";
import HttpCore from "./Server/Foundations/HttpCore";
import SocketServer from "./Server/Socket/SocketServer";
import SslObject from "./Server/SslObject";
import ConfigValidator from "./Server/Validation/ConfigValidator";

export default class Server implements Init {

    protected config : ServerConfig;

    protected validator : ConfigValidator;

    public constructor(config : ServerConfig) {

        this.config = config;

        this.validator = new ConfigValidator(config);

    }

    public init() : void {

        try {

            this.validator.validate();

            new SocketServer(this.getCore(this.config.httpVersion).listen(this.config.port)).init();

        }

        catch (errorInstance) {

            const exceptionReader = new ExceptionReader(errorInstance);

            exceptionReader.read();

        }

    }

    protected getCore(httpVersion : HttpVersion) : Core | never {

        switch (httpVersion) {

            case HTTP_VERSION.v1_1:

                return new HttpCore(httpVersion, new SslObject(this.config.ssl).flush());

            case HTTP_VERSION.v2_0:

                return new Http2Core(httpVersion, new SslObject(this.config.ssl).flush());

            default:

                throw new HttpVersionUnsupported(httpVersion);

        }

    }

}