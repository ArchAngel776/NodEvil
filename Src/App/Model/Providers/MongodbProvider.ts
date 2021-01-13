import DatabaseProvider from "../DatabaseProvider";
import * as MongoDB from "mongodb";
import DatabaseConfig from "../../../Data/Structures/DatabaseConfig";

export default class MongodbDatabaseProvider extends DatabaseProvider {

    protected client : MongoDB.MongoClient;

    public constructor(config : DatabaseConfig) {

        super(config);

        this.client = new MongoDB.MongoClient(`mongodb://${this.config.host}:${this.config.port}/`, {
            useUnifiedTopology: true
        });

    }

    public create() : any {

        

    }

    public read() : any {

        

    }

    public update() : any {



    }

    public delete() : any {



    }

}