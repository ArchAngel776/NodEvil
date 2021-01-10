import { DatabaseConditionOperator } from "../Types/DatabaseConditionOperator";
export default interface DatabaseCondition {
    key: string;
    operator: DatabaseConditionOperator;
    value: number | string | null;
}
//# sourceMappingURL=DatabaseCondition.d.ts.map