import SqlBuilder from "../SqlBuilder";
export default class SelectSqlBuilder extends SqlBuilder {
    build(): string;
    protected getMainFields(): string;
    protected getJoinFields(): string;
    protected joining(): string;
}
//# sourceMappingURL=SelectSqlBuilder.d.ts.map