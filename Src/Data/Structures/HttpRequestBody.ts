export default interface HttpRequestBody {
    [ paramKey : string ] : number | string | undefined | HttpRequestBody;
}