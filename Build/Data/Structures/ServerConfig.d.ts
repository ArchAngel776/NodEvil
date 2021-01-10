import { HttpVersion } from "../Types/HttpVersion";
import DatabaseConfig from "./DatabaseConfig";
import SslConfig from "./SslConfig";
export default interface ServerConfig {
    port: number;
    httpVersion: HttpVersion;
    ssl?: SslConfig;
    database: DatabaseConfig;
}
//# sourceMappingURL=ServerConfig.d.ts.map