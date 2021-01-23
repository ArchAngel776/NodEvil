const Controller = require("../../Build/index").Controller;
const View = require("../../Build/index").View;
const User = require("../Models/User");
const UserAuth = require("../Auth/UserAuth");
const Client = require("../../Build/index").Client;
const Validator = require("../../Build/index").Validator;

module.exports = class HomeController extends Controller {

    init() {

        

    }

    async index() {

        return (await new UserAuth(this.session).authorized()) ? 
        
            new View(this.session).route("/home").redirect() : 
            
            new View(this.session).route("/login").redirect();

    }

    async login() {

        return (await new UserAuth(this.session).authorized()) ? 
        
            new View(this.session).route("/home").redirect() : 
            
            new View(this.session).site("./Tests/Views/login.html").show();

    }

    async register(params) {

        console.log(new Validator(params).validation({
            username: {
                type: "string",
                
            }
        }))

    }

    async home() {

        return (await new UserAuth(this.session).authorized()) ? 
        
            new View(this.session).site("./Tests/Views/home.html").show() :

            new View(this.session).route("/login").redirect();

    }

    async auth(params) {

        return (await new UserAuth(this.session).authorization(params.username, params.password)) ? 
        
            new View(this.session).route("/home").redirect() :

            new View(this.session).route("/login").redirect();

    }

    async logout() {

        await new UserAuth(this.session).reject();

        return new View(this.session).route("/login").redirect();

    }

    async favicon() {

        return new View(this.session).data("").plain();

    }

}