import JOSEHeaderStructure from "../../../../Data/Structures/JOSEHeaderStructure";
import base64url from "base64url";

export default class JOSEHeader {

    protected header : JOSEHeaderStructure | null;

    protected hash : string | null;

    public constructor() {

        this.header = null;

        this.hash = null;

    }

    public loadHeader(header : JOSEHeaderStructure) : void {

        try {

            const jsonString = JSON.stringify(header);

            this.hash = base64url.encode(jsonString);

            this.header = header;

        }

        catch {

            this.hash = null;

            this.header = null;

        }

    }

    public loadHash(hash : string) : void {

        try {

            const jsonString = base64url.decode(hash);

            this.header = JSON.parse(jsonString);

            this.hash = hash;

        }

        catch {

            this.header = null;

            this.hash = null;

        }

    }

    public getHeader() : JOSEHeaderStructure | null {

        return this.header;

    }

    public getHash() : string | null {

        return this.hash;

    }

}