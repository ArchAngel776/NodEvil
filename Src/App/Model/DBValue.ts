import { DatabaseValue } from "../../Data/Types/DatabaseValue";

export default function DBValue(value : DatabaseValue) : string {

    if (typeof value === "string") {

        return `'${value}'`;

    }

    else if (value === null) {

        return "NULL";

    }

    else {

        return value.toString();

    }

}