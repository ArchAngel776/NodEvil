import JOSEHeaderStructure from "../../../../Data/Structures/JOSEHeaderStructure";
import base64url from "base64url";

export default class JOSEHeader {

    protected header : JOSEHeaderStructure | null;

    public constructor() {

        this.header = null;

    }

    public load(hash : string) : void {

        const jsonString = base64url.decode(hash);

        try {

            this.header = JSON.parse(jsonString);

        }

        catch {

            this.header = null;

        }

    }

    public getHeader() : JOSEHeaderStructure | null {

        return this.header;

    }

}