import Session from "./Controller/Session";
import Data from "./View/Types/Data";
import Route from "./View/Types/Route";
import Site from "./View/Types/Site";

export default class View {

    protected session : Session;

    public constructor(session : Session) {

        this.session = session;

    }

    public site(path : string) : Site {

        return new Site(this.session, path);

    }

    public route(path : string) : Route {

        return new Route(this.session, path);

    }

    public data(data : any) : Data {

        return new Data(this.session, data);

    }

}