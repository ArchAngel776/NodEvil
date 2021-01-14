import { DatabaseValue } from "../Data/Types/DatabaseValue";
import Session from "./Controller/Session";
export default abstract class Auth {
    protected session: Session;
    constructor(session: Session);
    abstract authorized(): Promise<boolean>;
    abstract authorization(...args: string[]): Promise<boolean>;
    abstract getField(fieldName: string): Promise<DatabaseValue>;
    abstract reject(): Promise<void>;
}
//# sourceMappingURL=Auth.d.ts.map