import HttpRequestBody from "../../../Data/Structures/HttpRequestBody";
export default class Url {
    protected fullPath: string;
    constructor(fullPath: string);
    pure(): string;
    params(): HttpRequestBody;
    setParams(params: HttpRequestBody): void;
    full(): string;
    domain(): string;
    path(): string;
}
//# sourceMappingURL=Url.d.ts.map