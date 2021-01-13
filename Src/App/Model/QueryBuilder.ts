import QueryBuilderSchema from "../../Data/Structures/QueryBuilderSchema";
import { CrudOperation } from "../../Data/Types/CrudOperation";
import Filter from "./QueryBuilder/Filter";
import Join from "./QueryBuilder/Join";
import Main from "./QueryBuilder/Main";

export default class QueryBuilder {

    protected main : Main;
    
    protected join : Join;

    protected filter : Filter;

    protected operation : CrudOperation | null;

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

    public changeOperation(operation : CrudOperation) : void {

        this.operation = operation;

    }

    public getSchema() : QueryBuilderSchema {

        const result : QueryBuilderSchema = {
            main: this.main.getSchema(),
            join: this.join.getSchema(),
            filter: this.filter.getSchema(),
            operation: <CrudOperation> this.operation
        };

        return result;

    }

}