import ViewResponse from "../../Data/Structures/ViewResponse";
import Session from "../Controller/Session";
import Generator from "../Controller/Session/Generator";
import Storage from "../Controller/Session/Storage";

export default abstract class ViewType {

    protected session : Session;

    public constructor(session : Session) {

        this.session = session;

    }

    protected withSession(viewResponse : ViewResponse) : ViewResponse {

        const sessionToken = new Generator(48).generate();

        let save = false;

        while (!save) save = Storage.set(sessionToken, this.session.flush());

        viewResponse.headers["Set-cookie"] = "session=" + sessionToken + "; Path=/; HttpOnly; Secure; SameSite=strict;";

        return viewResponse;

    }

}