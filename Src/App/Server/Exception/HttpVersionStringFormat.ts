import { HttpVersion } from "../../../Data/Types/HttpVersion";

export default class HttpVersionStringFormat extends Error {

    public constructor() {

        super();

        this.name = "HTTP Version String Format Exception";

        this.message = "HTTP version must be appear in string format.";

    }

}