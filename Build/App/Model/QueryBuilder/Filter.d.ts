import DatabaseCondition from "../../../Data/Structures/DatabaseCondition";
import FilterSchema from "../../../Data/Structures/FilterSchema";
import { DatabaseConditionOperator } from "../../../Data/Types/DatabaseConditionOperator";
import { DatabaseValue } from "../../../Data/Types/DatabaseValue";
import { DatabaseWhereOperator } from "../../../Data/Types/DatabaseWhereOperator";
export default class Filter {
    protected conditions: DatabaseCondition[];
    protected operators: DatabaseWhereOperator[];
    constructor();
    setCondition(field: string, value: DatabaseValue, operator?: DatabaseConditionOperator): void;
    addOrCondition(field: string, value: DatabaseValue, operator?: DatabaseConditionOperator): void;
    addAndCondition(field: string, value: DatabaseValue, operator?: DatabaseConditionOperator): void;
    getSchema(): FilterSchema;
}
//# sourceMappingURL=Filter.d.ts.map