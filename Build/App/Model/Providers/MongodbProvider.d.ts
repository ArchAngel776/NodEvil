import DatabaseProvider from "../DatabaseProvider";
import * as MongoDB from "mongodb";
import DatabaseConfig from "../../../Data/Structures/DatabaseConfig";
export default class MongodbDatabaseProvider extends DatabaseProvider {
    protected client: MongoDB.MongoClient;
    constructor(config: DatabaseConfig);
    create(): any;
    read(): any;
    update(): any;
    delete(): any;
}
//# sourceMappingURL=MongodbProvider.d.ts.map