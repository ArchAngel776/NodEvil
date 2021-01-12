import { DatabaseValue } from "../Types/DatabaseValue";

export default interface TableData {
    [ field : string ] : DatabaseValue;
}