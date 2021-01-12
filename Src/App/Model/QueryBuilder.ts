import QueryBuilderSchema from "../../Data/Structures/QueryBuilderSchema";
import { QueryBuilderOperation } from "../../Data/Types/QueryBuilderOperation";
import Filter from "./QueryBuilder/Filter";
import Join from "./QueryBuilder/Join";
import Main from "./QueryBuilder/Main";

export default class QueryBuilder {

    protected main : Main;
    
    protected join : Join;

    protected filter : Filter;

    protected operation : QueryBuilderOperation | null;

    public constructor(tableName : string) {

        this.main = new Main(tableName);

        this.join = new Join();

        this.filter = new Filter();

        this.operation = null;

    }

    public selectMain() : Main {

        return this.main;

    }

    public selectJoin() : Join {

        return this.join;

    }

    public selectFilter() : Filter {

        return this.filter;

    }

    public changeOperation(operation : QueryBuilderOperation) : void {

        this.operation = operation;

    }

    public getSchema() : QueryBuilderSchema | never {

        if (this.operation === null) {

            throw new Error();

        }

        const result : QueryBuilderSchema = {
            main: this.main.getSchema(),
            join: this.join.getSchema(),
            filter: this.filter.getSchema(),
            operation: this.operation
        };

        return result;

    }

}