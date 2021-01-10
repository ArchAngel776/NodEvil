export default class HttpVersionRequried extends Error {

    public constructor() {

        super();

        this.name = "HTTP Version Required Exception";

        this.message = "Server configuration requires specyfic HTTP version.";

    }

}