"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpVersion_1 = require("../Data/Statics/HttpVersion");
const ExceptionReader_1 = require("./Exception/ExceptionReader");
const Model_1 = require("./Model");
const HttpVersionUnsupported_1 = require("./Server/Exception/HttpVersionUnsupported");
const Http2Core_1 = require("./Server/Foundations/Http2Core");
const HttpCore_1 = require("./Server/Foundations/HttpCore");
const SocketServer_1 = require("./Channel/SocketServer");
const Ssl_1 = require("./Server/Ssl");
const ConfigValidator_1 = require("./Server/Validation/ConfigValidator");
const Router_1 = require("./Router");
class Server {
    constructor(config) {
        this.config = config;
        this.router = new Router_1.default();
        this.validator = new ConfigValidator_1.default(config);
    }
    init() {
        try {
            this.validator.validate();
            new SocketServer_1.default(this.getCore(this.config.httpVersion).listen(this.config.port))
                .addRouting(this.router)
                .init();
            Model_1.default.setConfig(this.config.database);
        }
        catch (errorInstance) {
            const exceptionReader = new ExceptionReader_1.default(errorInstance);
            exceptionReader.read();
        }
    }
    withRouter(router) {
        this.router = router;
        return this;
    }
    getCore(httpVersion) {
        switch (httpVersion) {
            case HttpVersion_1.HTTP_VERSION.v1_1:
                return new HttpCore_1.default(httpVersion, new Ssl_1.default(this.config.ssl).flush())
                    .routing(this.router);
            case HttpVersion_1.HTTP_VERSION.v2_0:
                return new Http2Core_1.default(httpVersion, new Ssl_1.default(this.config.ssl).flush())
                    .routing(this.router);
            default:
                throw new HttpVersionUnsupported_1.default(httpVersion);
        }
    }
}
exports.default = Server;
