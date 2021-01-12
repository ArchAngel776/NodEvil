import TableSchema from "../../../Data/Structures/TableSchema";
import { DatabaseValue } from "../../../Data/Types/DatabaseValue";
export default class Main {
    protected tableName: string;
    protected fields: string[];
    protected values: DatabaseValue[];
    constructor(tableName: string);
    changeTable(tableName: string): void;
    setFields(fields: string[]): void;
    setValues(values: DatabaseValue[]): void;
    getSchema(): TableSchema;
}
//# sourceMappingURL=Main.d.ts.map