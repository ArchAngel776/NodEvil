import { DatabaseValue } from "./DatabaseValue";

export type TableData = {
    [ Column : string ] : DatabaseValue;
}