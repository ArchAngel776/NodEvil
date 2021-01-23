import ValidatedData from "../Data/Structures/ValidatedData";
import ValidationSetup from "../Data/Structures/ValidationSetup";
import ValidatorMessages from "../Data/Structures/ValidatorMessages";
import ValidationType from "./Validator/Exception/ValidationType";

export default class Validator {

    protected data : ValidatedData;

    public constructor(data : ValidatedData) {

        this.data = data;

    }

    public validation(setup : ValidationSetup) : true | ValidatorMessages | never {

        for (const field in setup) {

            switch (setup[field].type) {

                case "number":

                    

                default:

                    throw new ValidationType(setup[field].type);

            }

        }

        return true;

    }

}