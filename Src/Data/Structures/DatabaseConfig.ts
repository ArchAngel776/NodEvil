import { DatabaseEngine } from "../Types/DatabaseEngine";

export default interface DatabaseConfig {
    engine : DatabaseEngine;
    host : string;
    port : number;
    dbname : string;
    username : string;
    password : string;
}