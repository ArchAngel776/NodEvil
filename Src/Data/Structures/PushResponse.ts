import HttpResponseHeaders from "./HttpResponseHeaders";

export default interface PushResponse {
    status : number;
    path : string;
    headers : HttpResponseHeaders;
    content? : string | Buffer;
}