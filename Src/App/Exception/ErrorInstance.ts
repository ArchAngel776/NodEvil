import Init from "../../Data/Interfaces/Init";

export default abstract class ErrorInstance extends Error implements Init {

    protected args : any[];

    public constructor(...args : any[]) {

        super();

        this.args = args;

        this.init();

    }

    public init() : void {

        this.name = this.getTitle();

        this.message = this.getMessage(...this.args);

    }

    protected abstract getTitle() : string;

    protected abstract getMessage(...args : any[]) : string;

}