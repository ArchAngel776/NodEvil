import { DatabaseWhereOperator } from "../Types/DatabaseWhereOperator";
import DatabaseCondition from "./DatabaseCondition";

export default interface FilterSchema {
    conditions : DatabaseCondition[];
    operators : DatabaseWhereOperator[];
}