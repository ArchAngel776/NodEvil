import { readFileSync } from "fs";
import { HTTP_STATUS } from "../../../Data/Statics/HttpStatus";
import ViewResponse from "../../../Data/Structures/ViewResponse";
import Session from "../../Controller/Session";
import ViewType from "../ViewType";

export default class Site extends ViewType {

    protected path : string;

    public constructor(session : Session, path : string) {

        super(session);

        this.path = path;

    }

    public show() : ViewResponse {

        const response : ViewResponse = {
            status: HTTP_STATUS.OK,
            headers: {
                "Content-type": "text/html"
            },
            content: readFileSync(this.path)
        };

        return this.withSession(response);

    }

}