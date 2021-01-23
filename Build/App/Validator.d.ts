import ValidatedData from "../Data/Structures/ValidatedData";
import ValidationSetup from "../Data/Structures/ValidationSetup";
import ValidatorMessages from "../Data/Structures/ValidatorMessages";
export default class Validator {
    protected data: ValidatedData;
    constructor(data: ValidatedData);
    validation(setup: ValidationSetup): true | ValidatorMessages | never;
}
//# sourceMappingURL=Validator.d.ts.map