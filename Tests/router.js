const Router = require("../Build/index").Router;
const LoginController = require("./Controllers/LoginController");
const HomeController = require("./Controllers/HomeController");

module.exports = new Router()

//Login

.get("/login", LoginController, "index")

.post("/login", LoginController, "login")

.post("/logout", LoginController, "logout")

//Home

.get("/", HomeController, "index")

.get("/home", HomeController, "index")

.get("/favicon.ico", HomeController, "favicon")
