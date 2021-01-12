import JoinOn from "../../../Data/Structures/JoinOn";
import JoinTableSchema from "../../../Data/Structures/JoinTableSchema";
import Main from "./Main";

export default class Join extends Main {

    protected joining : boolean;

    protected on : JoinOn;

    public constructor() {

        super("");

        this.joining = false;

        this.on = {
            left: "",
            right: ""
        };

    }

    public activeJoining() : void {

        this.joining = true;

    }

    public setOn(left : string, right : string) : void {

        this.on.left = left;

        this.on.right = right;

    }

    public join() : boolean {

        return this.joining;

    }

    public getSchema() : JoinTableSchema {

        const result : JoinTableSchema = {
            joining: this.joining,
            tableName: this.tableName,
            fields: this.fields,
            values: this.values,
            on: this.on
        };

        return result;

    }

}