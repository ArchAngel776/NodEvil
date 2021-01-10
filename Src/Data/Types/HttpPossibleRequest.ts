import * as http from "http";
import * as http2 from "http2";

export type HttpPossibleRequest = http.IncomingMessage | http2.Http2ServerRequest;