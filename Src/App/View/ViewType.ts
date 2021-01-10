import ViewResponse from "../../Data/Structures/ViewResponse";
import Session from "../Controller/Session";

export default abstract class ViewType {

    protected session : Session;

    public constructor(session : Session) {

        this.session = session;

    }

    protected withSession(viewResponse : ViewResponse) : ViewResponse {

        viewResponse.headers["Set-cookie"] = "session=" + this.session.flush() + "; Path=/; HttpOnly; Secure; SameSite=strict;";

        return viewResponse;

    }

}