const Router = require("../Build/index").Router;
const HomeController = require("./Controllers/HomeController");

Router.get("/", HomeController, "index");

Router.get("/home", HomeController, "home");