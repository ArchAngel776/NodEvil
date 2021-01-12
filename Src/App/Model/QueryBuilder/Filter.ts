import DatabaseCondition from "../../../Data/Structures/DatabaseCondition";
import FilterSchema from "../../../Data/Structures/FilterSchema";
import { DatabaseConditionOperator } from "../../../Data/Types/DatabaseConditionOperator";
import { DatabaseValue } from "../../../Data/Types/DatabaseValue";
import { DatabaseWhereOperator } from "../../../Data/Types/DatabaseWhereOperator";

export default class Filter {

    protected conditions : DatabaseCondition[];

    protected operators : DatabaseWhereOperator[];

    public constructor() {

        this.conditions = [];

        this.operators = [];

    }

    public setCondition(field : string, value : DatabaseValue, operator : DatabaseConditionOperator = "=") : void {

        this.conditions = [];

        this.operators = [];

        this.conditions.push({ field, value, operator });

    }

    public addOrCondition(field : string, value : DatabaseValue, operator : DatabaseConditionOperator = "=") : void {

        this.conditions.push({ field, value, operator });

        this.operators.push("OR");

    }

    public addAndCondition(field : string, value : DatabaseValue, operator : DatabaseConditionOperator = "=") : void {

        this.conditions.push({ field, value, operator });

        this.operators.push("AND");

    }

    public getSchema() : FilterSchema {

        const result : FilterSchema = {
            conditions: this.conditions,
            operators: this.operators
        };

        return result;

    }

}