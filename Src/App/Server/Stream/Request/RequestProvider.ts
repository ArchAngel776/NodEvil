import HttpRequestBody from "../../../../Data/Structures/HttpRequestBody";
import HttpRequestHeaders from "../../../../Data/Structures/HttpRequestHeaders";
import { HttpMethod } from "../../../../Data/Types/HttpMethod";
import { HttpPossibleRequest } from "../../../../Data/Types/HttpPossibleRequest";

export default abstract class RequestProvider {

    protected abstract core : HttpPossibleRequest;

    public abstract getUrl() : string;

    public abstract getType() : HttpMethod;

    public abstract getHeaders() : HttpRequestHeaders;

    public abstract getBody() : Promise<HttpRequestBody>;

}