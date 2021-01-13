import { DatabaseEngine } from "../../../Data/Types/DatabaseEngine";
import ErrorInstance from "../../Exception/ErrorInstance";

export default class DatabaseProviderUnsupported extends ErrorInstance {

    public constructor(engine : DatabaseEngine) {

        super(engine);

    }

    protected getTitle() : string {

        return "Database Provider Unsupported Exception";

    }

    protected getMessage(engine : DatabaseEngine) : string {

        return `Database engine "${engine}" is unsupported Database Provider.`;

    }

}