import { DatabaseValue } from "../Types/DatabaseValue";

export default interface TableSchema {
    tableName : string;
    fields : string[];
    values : DatabaseValue[];
}