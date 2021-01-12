import { HttpPossibleCore } from "../../../Data/Types/HttpPossibleCore";
import SslStructure from "../../../Data/Structures/SslStructure";
import { HttpPossibleRequest } from "../../../Data/Types/HttpPossibleRequest";
import { HttpPossibleResponse } from "../../../Data/Types/HttpPossibleResponse";
import { HttpVersion } from "../../../Data/Types/HttpVersion";

export default abstract class Core {

    protected core : HttpPossibleCore;

    protected version : HttpVersion;

    public constructor(version : HttpVersion, ssl : SslStructure | undefined = undefined) {

        this.core = ssl ? this.createSecured(ssl) : this.createUnsecured();

        this.version = version;

    }

    protected abstract requestHandler(request : HttpPossibleRequest, response : HttpPossibleResponse) : Promise<void>;

    protected abstract createSecured(ssl : SslStructure) : HttpPossibleCore;

    protected abstract createUnsecured() : HttpPossibleCore;

    public listen(port : number) : HttpPossibleCore {

        this.core.listen(port, () => console.log(`Server started at ${port} port.`));

        return this.core;

    }

}