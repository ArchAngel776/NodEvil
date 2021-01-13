import { CrudOperation } from "../../../Data/Types/CrudOperation";
import ErrorInstance from "../../Exception/ErrorInstance";

export default class CrudOperationUnsupported extends ErrorInstance {

    public constructor(operation : CrudOperation) {

        super(operation);

    }

    protected getTitle() : string {

        return "CRUD Operation Unsupported Exception";

    }

    protected getMessage(operation : CrudOperation) : string {

        return `Operation "${operation}" is unsupported CRUD operation.`;

    }

}