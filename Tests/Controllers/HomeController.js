const Controller = require("../../Build/index").Controller;
const View = require("../../Build/index").View;
const User = require("../Models/User");
const UserAuth = require("../Auth/UserAuth");
const Client = require("../../Build/index").Client;
const Validator = require("../../Build/index").Validator;

module.exports = class HomeController extends Controller {

    async index() {

        return new View(this.session).site("./Tests/Views/home.html").show();

    }

    async favicon() {

        return new View(this.session).data("").plain();

    }

}