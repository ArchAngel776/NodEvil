export default class SslChainWrongPath extends Error {

    public constructor(chainPath : string) {

        super();

        this.name = "SSL Chain Wrong Path Exception";

        this.message = "Path: " + chainPath + " is incorrect SSL chain path.";

    }

}