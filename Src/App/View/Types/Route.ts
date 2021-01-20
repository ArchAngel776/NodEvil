import { HTTP_STATUS } from "../../../Data/Statics/HttpStatus";
import ViewResponse from "../../../Data/Structures/ViewResponse";
import Session from "../../Controller/Session";
import ViewType from "../ViewType";

export default class Route extends ViewType {

    protected path : string;

    public constructor(session : Session, path : string) {

        super(session);

        this.path = path;

    }

    public redirect() : ViewResponse {

        const response : ViewResponse = {
            status: HTTP_STATUS.REDIRECT,
            headers: {
                "Location": this.path
            }
        };

        return this.withSession(response);

    }

}