import { AuthInstance } from "../../Data/Types/AuthInstance";
export default class MiddlewareAuth {
    protected authorizations: AuthInstance[];
    protected excepted: string[];
    constructor();
    setAuthorization(...auths: AuthInstance[]): MiddlewareAuth;
    except(...actions: string[]): MiddlewareAuth;
}
//# sourceMappingURL=MiddlewareAuth.d.ts.map