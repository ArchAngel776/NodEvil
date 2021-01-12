import { DatabaseConditionOperator } from "../Types/DatabaseConditionOperator";
import { DatabaseValue } from "../Types/DatabaseValue";
export default interface DatabaseCondition {
    field: string;
    value: DatabaseValue;
    operator: DatabaseConditionOperator;
}
//# sourceMappingURL=DatabaseCondition.d.ts.map