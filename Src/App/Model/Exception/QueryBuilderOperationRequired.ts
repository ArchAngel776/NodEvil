import ErrorInstance from "../../Exception/ErrorInstance";

export default class QueryBuilderOperationRequired extends ErrorInstance {

    public constructor() {

        super();

    }

    protected getTitle() : string {

        return "Query Builder Operation Required Exception";

    }

    protected getMessage() : string {

        return `Query Builder requires a CRUD operation type.`;

    }

}