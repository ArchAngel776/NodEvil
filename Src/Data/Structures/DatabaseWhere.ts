import { DatabaseWhereOperator } from "../Types/DatabaseWhereOperator";
import DatabaseCondition from "./DatabaseCondition";

export default interface DatabaseWhere extends Array<DatabaseCondition | DatabaseWhereOperator> {
    [ index : number ] : DatabaseCondition | DatabaseWhereOperator;
}