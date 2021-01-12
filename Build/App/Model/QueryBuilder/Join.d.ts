import JoinOn from "../../../Data/Structures/JoinOn";
import JoinTableSchema from "../../../Data/Structures/JoinTableSchema";
import Main from "./Main";
export default class Join extends Main {
    protected joining: boolean;
    protected on: JoinOn;
    constructor();
    activeJoining(): void;
    setOn(left: string, right: string): void;
    join(): boolean;
    getSchema(): JoinTableSchema;
}
//# sourceMappingURL=Join.d.ts.map