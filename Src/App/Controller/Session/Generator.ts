import { STRING } from "../../../Data/Statics/String";

export default class Generator {

    protected length : number;

    public constructor(length : number) {

        this.length = length;

    }

    protected append(source : string[]) : string[] {

        if (source.length === this.length) {

            return source;

        }

        const code = (Math.random() * 74) + 48;

        if ((code > 57 && code < 65) || (code > 90 && code < 97)) {

            return this.append(source);

        }

        return this.append([...source, String.fromCharCode(code)]);

    }

    public generate() : string {

        const source = this.append([]);

        const result = source.join(STRING.EMPTY);

        return result;

    }

}