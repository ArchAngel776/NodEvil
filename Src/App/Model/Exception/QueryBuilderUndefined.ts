import ErrorInstance from "../../Exception/ErrorInstance";

export default class QueryBuilderUndefined extends ErrorInstance {

    public constructor() {

        super();

    }

    protected getTitle() : string {

        return "Query Builder Undefined Exception";

    }

    protected getMessage() : string {

        return `Database provider requires own Query Builder.`;

    }

}