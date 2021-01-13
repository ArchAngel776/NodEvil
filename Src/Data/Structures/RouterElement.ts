import { ControllerInstance } from "../Types/ControllerInstance";
import { HttpMethod } from "../Types/HttpMethod";

export default interface RouterElement {
    path : string;
    method : HttpMethod;
    controller : ControllerInstance;
    action : string;
}