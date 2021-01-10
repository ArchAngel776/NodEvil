const Controller = require("../../Build/index").Controller;
const View = require("../../Build/index").View;

module.exports = class HomeController extends Controller {

    async index() {

        return new View(this.session).route("/home").redirect();

    }

    async home() {

        return new View(this.session).site("./Tests/Views/home.html").show();

    }

}