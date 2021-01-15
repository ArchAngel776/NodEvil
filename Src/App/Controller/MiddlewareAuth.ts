import { AuthInstance } from "../../Data/Types/AuthInstance";

export default class MiddlewareAuth {

    protected authorizations : AuthInstance[];

    protected excepted : string[];

    public constructor() {

        this.authorizations = [];

        this.excepted = [];

    }

    public setAuthorization(...auths : AuthInstance[]) : MiddlewareAuth {

        this.authorizations.push(...auths);

        return this;

    }

    public except(...actions : string[]) : MiddlewareAuth {

        this.excepted.push(...actions);

        return this;

    }

}