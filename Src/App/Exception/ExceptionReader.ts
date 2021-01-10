export default class ExceptionReader {

    protected errorInstance : Error;

    public constructor(errorInstance : Error) {

        this.errorInstance = errorInstance;

    }

    protected writeSection(content : string, end : string = "") : void {

        console.error(`\n${content}${end}`);

    }

    public read() : void {

        this.writeSection(this.errorInstance.name, ":");

        this.writeSection(this.errorInstance.message);

        this.writeSection(<string> this.errorInstance.stack);

    }

}