import { DatabaseEngine } from "../../../Data/Types/DatabaseEngine";
import ErrorInstance from "../../Exception/ErrorInstance";
export default class DatabaseProviderUnsupported extends ErrorInstance {
    constructor(engine: DatabaseEngine);
    protected getTitle(): string;
    protected getMessage(engine: DatabaseEngine): string;
}
//# sourceMappingURL=DatabaseProviderUnsupported.d.ts.map