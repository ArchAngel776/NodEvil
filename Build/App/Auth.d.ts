import Session from "./Controller/Session";
export default abstract class Auth {
    protected session: Session;
    protected abstract authName: string;
    constructor(session: Session);
    abstract authorized(): Promise<boolean>;
    abstract authorization(...args: string[]): Promise<boolean>;
    abstract reject(): Promise<void>;
}
//# sourceMappingURL=Auth.d.ts.map