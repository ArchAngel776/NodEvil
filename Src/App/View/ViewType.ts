import ViewResponse from "../../Data/Structures/ViewResponse";
import Session from "../Controller/Session";
import Cookie from "../Controller/Session/Cookie";
import Generator from "../Controller/Session/Generator";
import Storage from "../Controller/Session/Storage";

export default abstract class ViewType {

    protected session : Session;

    public constructor(session : Session) {

        this.session = session;

    }

    protected withSession(viewResponse : ViewResponse) : ViewResponse {

        viewResponse.headers["Set-cookie"] = this.session.save();

        return viewResponse;

    }

}