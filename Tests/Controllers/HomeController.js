const Controller = require("../../Build/index").Controller;
const View = require("../../Build/index").View;
const User = require("../Models/User");
const UserAuth = require("../Auth/UserAuth");
const Client = require("../../Build/index").Client;

module.exports = class HomeController extends Controller {

    init() {

        

    }

    async index() {

        return (await new UserAuth(this.session).authorized()) ? 
        
            new View(this.session).route("/home").redirect() : 
            
            new View(this.session).route("/login").redirect();

    }

    async login() {

        const response = await new Client("1.1").url("https://maps.googleapis.com/maps/api/place/autocomplete/json")
            .headers({
                "accept": "application/json"
            })
            .body({
                "key": "AIzaSyAqj5NIohCecPc9sjda7vtJc3UBJYQmpYA",
                "input": "Prusy"
            })
            .get();

        console.log(response)

        return (await new UserAuth(this.session).authorized()) ? 
        
            new View(this.session).route("/home").redirect() : 
            
            new View(this.session).site("./Tests/Views/login.html").show();

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