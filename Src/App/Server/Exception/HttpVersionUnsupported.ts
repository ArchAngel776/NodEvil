import { HttpVersion } from "../../../Data/Types/HttpVersion";

export default class HttpVersionUnsupported extends Error {

    public constructor(httpVersion : HttpVersion) {

        super();

        this.name = "HTTP Version Unsupported Exception";

        this.message = "Version: " + httpVersion + " is unsupported HTTP version. Supported versions are: 1.1, 2.0";

    }

}