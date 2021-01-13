const Controller = require("../../Build/index").Controller;
const View = require("../../Build/index").View;
const User = require("../Models/User");

module.exports = class HomeController extends Controller {

    async index() {

        return new View(this.session).route("/home").redirect();

    }

    async home() {

        console.log(await new User().getUsers());

        return new View(this.session).site("./Tests/Views/home.html").show();

    }

    async favicon() {

        return new View(this.session).data("").plain();

    }

}