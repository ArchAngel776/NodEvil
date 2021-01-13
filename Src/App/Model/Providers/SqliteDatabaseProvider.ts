import QueryBuilderSchema from "../../../Data/Structures/QueryBuilderSchema";
import DatabaseProvider from "../DatabaseProvider";
import SelectSqlBuilder from "../SqlBuilder/SelectSqlBuilder";

export default class SqliteDatabaseProvider extends DatabaseProvider {

    public create() : any {

        

    }

    public read() : any {

        const sqlBuilder = new SelectSqlBuilder(this.queryBuilderSchema as QueryBuilderSchema);

    }

    public update() : any {



    }

    public delete() : any {



    }

}