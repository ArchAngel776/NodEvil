import NumberValidation from "./NumberValidation";
import StringValidation from "./StringValidation";

export default interface ValidationSetup {
    [ field : string ] : NumberValidation | StringValidation;
}