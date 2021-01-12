import QueryBuilderSchema from "../../Data/Structures/QueryBuilderSchema";

export default abstract class DatabaseProvider {

    protected queryBuilderSchema : QueryBuilderSchema | null;

    public constructor() {

        this.queryBuilderSchema = null;

    }

}