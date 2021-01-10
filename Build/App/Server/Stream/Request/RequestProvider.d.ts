import HttpRequestBody from "../../../../Data/Structures/HttpRequestBody";
import HttpRequestHeaders from "../../../../Data/Structures/HttpRequestHeaders";
import { HttpMethod } from "../../../../Data/Types/HttpMethod";
import { HttpPossibleRequest } from "../../../../Data/Types/HttpPossibleRequest";
export default abstract class RequestProvider {
    protected abstract core: HttpPossibleRequest;
    abstract getUrl(): string;
    abstract getType(): HttpMethod;
    abstract getHeaders(): HttpRequestHeaders;
    abstract getBody(): Promise<HttpRequestBody>;
}
//# sourceMappingURL=RequestProvider.d.ts.map