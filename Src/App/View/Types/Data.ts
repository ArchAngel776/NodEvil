import { HTTP_STATUS } from "../../../Data/Statics/HttpStatus";
import ViewResponse from "../../../Data/Structures/ViewResponse";
import Session from "../../Controller/Session";
import ViewType from "../ViewType";

export default class Data extends ViewType {

    protected data : any;

    public constructor(session : Session, data : any) {

        super(session);

        this.data = data;

    }

    public plain() : ViewResponse {

        const response : ViewResponse = {
            status: HTTP_STATUS.OK,
            headers: {
                "Content-type": "text/plain"
            },
            content: typeof this.data === "string" ? this.data : this.data.toString()
        };

        return this.withSession(response);

    }

    public xml() : ViewResponse {

        const response : ViewResponse = {
            status: HTTP_STATUS.OK,
            headers: {
                "Content-type": "text/xml"
            },
            content: this.data
        };

        return this.withSession(response);

    }

    public json() : ViewResponse {

        const response : ViewResponse = {
            status: HTTP_STATUS.OK,
            headers: {
                "Content-type": "application/json"
            },
            content: typeof this.data === "string" ? this.data : JSON.stringify(this.data)
        };

        return this.withSession(response);

    }

}