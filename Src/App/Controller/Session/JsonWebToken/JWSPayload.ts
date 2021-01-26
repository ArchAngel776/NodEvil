import base64url from "base64url";
import JWSPayloadStructure from "../../../../Data/Structures/JWSPayloadStructure";

export default class JWSPayload {

    protected payload : JWSPayloadStructure | null;

    protected hash : string | null;

    public constructor() {

        this.payload = null;

        this.hash = null;

    }

    public loadPayload(payload : JWSPayloadStructure) : void {

        try {

            const jsonString = JSON.stringify(payload);

            this.hash = base64url.encode(jsonString);

            this.payload = payload;

        }

        catch {

            this.hash = null;

            this.payload = null;

        }

    }

    public loadHash(hash : string) : void {

        try {

            const jsonString = base64url.decode(hash);

            this.payload = JSON.parse(jsonString);

            this.hash = hash;

        }

        catch {

            this.payload = null;

            this.hash = null;

        }

    }

    public getPayload() : JWSPayloadStructure | null {

        return this.payload;

    }

    public getHash() : string | null {

        return this.hash;

    }

}