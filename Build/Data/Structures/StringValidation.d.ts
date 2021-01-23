import { ModelInstance } from "../Types/ModelInstance";
import { StringType } from "../Types/StringType";
export default interface StringValidation {
    type: StringType;
    required?: boolean;
    minLen?: number;
    maxLen?: number;
    pattern?: RegExp;
    unique?: ModelInstance;
    sameAs?: string;
}
//# sourceMappingURL=StringValidation.d.ts.map