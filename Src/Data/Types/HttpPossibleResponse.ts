import * as http from "http";
import * as http2 from "http2";

export type HttpPossibleResponse = http.ServerResponse | http2.Http2ServerResponse;