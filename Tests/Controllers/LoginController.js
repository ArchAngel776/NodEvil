const Controller = require("../../Build/index").Controller;
const UserAuth = require("../Auth/UserAuth");
const View = require("../../Build/index").View;

module.exports = class LoginController extends Controller {

    async index() {

        return new View(this.session).site("./Tests/Views/login.html").show();

    }

    async login(params) {

        const authorization = await new UserAuth(this.session).authorization(params.username, params.password);

        return authorization ?

            new View(this.session).route("/home").redirect() :

            new View(this.session).site("./Tests/Views/loginWithException.html");

    }

    async logout() {

        await new UserAuth(this.session).reject();

        return new View(this.session).route("/login").redirect();

    }

}