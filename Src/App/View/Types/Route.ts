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
            status: 301,
            headers: {
                "Location": this.path
            }
        };

        return this.withSession(response);

    }

}