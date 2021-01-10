import HttpRequestBody from "../Structures/HttpRequestBody";
import ViewResponse from "../Structures/ViewResponse";

export default interface ControllerAction {
    (params : HttpRequestBody) : Promise<ViewResponse>;
}