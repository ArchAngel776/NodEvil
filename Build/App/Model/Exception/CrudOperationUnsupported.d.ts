import { CrudOperation } from "../../../Data/Types/CrudOperation";
import ErrorInstance from "../../Exception/ErrorInstance";
export default class CrudOperationUnsupported extends ErrorInstance {
    constructor(operation: CrudOperation);
    protected getTitle(): string;
    protected getMessage(operation: CrudOperation): string;
}
//# sourceMappingURL=CrudOperationUnsupported.d.ts.map