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

}