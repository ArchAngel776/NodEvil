import ViewResponse from "../../Data/Structures/ViewResponse";
import Session from "../Controller/Session";
import Cookie from "../Controller/Session/Cookie";

export default abstract class ViewType {

    protected session : Session;

    public constructor(session : Session) {

        this.session = session;

    }

    protected withSession(viewResponse : ViewResponse) : ViewResponse {

        viewResponse.headers["Set-cookie"] = new Cookie("session")
            .Set(this.session.flushToken())
            .Origin("/")
            .SameSite("Lax")
            .HttpOnly()
            .Secure()
            .Extract();

        return viewResponse;

    }

}