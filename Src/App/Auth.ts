import { DatabaseValue } from "../Data/Types/DatabaseValue";
import Session from "./Controller/Session";

export default abstract class Auth {

    protected session : Session;

    protected abstract authName : string;

    public constructor(session : Session) {

        this.session = session;

    }

    public abstract authorized() : Promise<boolean>;

    public abstract authorization(...args : string[]) : Promise<boolean>;

    public abstract getField(fieldName : string) : Promise<DatabaseValue>;

    public abstract reject() : Promise<void>;

}