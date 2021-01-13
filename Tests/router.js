const Router = require("../Build/index").Router;
const HomeController = require("./Controllers/HomeController");
const UserChannel = require("./Channels/UserChannel");

Router.get("/", HomeController, "index");

Router.get("/home", HomeController, "home");

Router.get("/favicon.ico", HomeController, "favicon");

Router.channel("/", UserChannel);