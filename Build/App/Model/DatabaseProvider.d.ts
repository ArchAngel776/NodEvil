import Validation from "../../Data/Interfaces/Validation";
import DatabaseConfig from "../../Data/Structures/DatabaseConfig";
import QueryBuilderSchema from "../../Data/Structures/QueryBuilderSchema";
export default abstract class DatabaseProvider implements Validation {
    protected config: DatabaseConfig;
    protected queryBuilderSchema: QueryBuilderSchema | null;
    constructor(config: DatabaseConfig);
    setSchema(queryBuilderSchema: QueryBuilderSchema): void;
    validation(): void | never;
    abstract create(): Promise<number | never>;
    abstract read<Schema>(): Promise<Array<Schema> | never>;
    abstract update(): Promise<number | never>;
    abstract delete(): Promise<number | never>;
}
//# sourceMappingURL=DatabaseProvider.d.ts.map