import HttpRequestBody from "../../../Data/Structures/HttpRequestBody";
import { HttpContentType } from "../../../Data/Types/HttpContentType";
import { HttpPossibleRequest } from "../../../Data/Types/HttpPossibleRequest";
export default class BodyRequest {
    protected requestCore: HttpPossibleRequest;
    constructor(requestCore: HttpPossibleRequest);
    getBody(contentType: HttpContentType): Promise<HttpRequestBody>;
    protected getType(dataString: string, contentType: HttpContentType): HttpRequestBody;
}
//# sourceMappingURL=BodyRequest.d.ts.map