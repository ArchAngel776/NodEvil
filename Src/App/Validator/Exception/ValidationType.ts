import ErrorInstance from "../../Exception/ErrorInstance";

export default class ValidationType extends ErrorInstance {

    public constructor(type : string) {

        super(type);

    }

    protected getTitle() : string {

        return "Validation Type Exception";

    }

    protected getMessage(type : string) : string {

        return `Type "${type}" is incorrect validation type.`;

    }

}