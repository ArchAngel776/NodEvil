const Router = require("../Build/index").Router;
const HomeController = require("./Controllers/HomeController");
const UserChannel = require("./Channels/UserChannel");

Router.get("/", HomeController, "index");

Router.get("/login", HomeController, "login");

Router.get("/home", HomeController, "home");

Router.post("/login", HomeController, "auth");

Router.post("/logout", HomeController, "logout");

Router.get("/favicon.ico", HomeController, "favicon");

Router.channel("/", UserChannel);