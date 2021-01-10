import HttpRequestBody from "../../../Data/Structures/HttpRequestBody";
export default class Url {
    protected fullPath: string;
    constructor(fullPath: string);
    pure(): string;
    params(): HttpRequestBody;
}
//# sourceMappingURL=Url.d.ts.map