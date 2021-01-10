import DatabaseProvider from "./Model/DatabaseProvider";
import QueryBuilder from "./Model/QueryBuilder";

export default abstract class Model {

    protected abstract table : string;

    protected queryBuilder : QueryBuilder;

    //protected provider : DatabaseProvider;

    public constructor() {

        this.queryBuilder = new QueryBuilder(this.getTable);

        //this.provider = this.createProvider();

    }

    protected get getTable() : string {

        return this.table;

    }

}