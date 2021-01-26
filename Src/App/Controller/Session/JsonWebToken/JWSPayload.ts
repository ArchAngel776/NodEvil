import base64url from "base64url";
import JWSPayloadStructure from "../../../../Data/Structures/JWSPayloadStructure";

export default class JWSPayload {

    protected payload : JWSPayloadStructure | null;

    public constructor() {

        this.payload = null;

    }

    public load(hash : string) : void {

        const jsonString = base64url.decode(hash);

        try {

            this.payload = JSON.parse(jsonString);

        }

        catch {

            this.payload = null;

        }

    }

    public getPayload() : JWSPayloadStructure | null {

        return this.payload;

    }

}