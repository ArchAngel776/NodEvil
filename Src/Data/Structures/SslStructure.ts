export default interface SslStructure {
    key : string | Buffer;
    cert : string | Buffer;
    ca? : string | Buffer | Array<string> | Array<Buffer>;
}