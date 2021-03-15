# NodEvil
Javascript / Typescript server-side framework working in MVC architecture pattern. It is a simple tool which can help you with your app projects ;)

# Installation
You can install NodEvil using npm command:

``npm install nodevil``

After that NodEvil should appear inside ``node_modules``. Now you can use that using:

```javascript

import * as NodEvil from "nodevil";

```
# Architecture
This project contain some modules which enable server app creation. Those are:

### Server

Basic class - create server instance, contain informations as: Http version, port number, SSL paths, Database configuration. Is responsible for server core work.

### Router

Define URLs map - instance of all trace of your server. Contain informations about GET and POST requests. Is responsible for directing client to right controllers and actions.

### Controller

Abstract namespace of actions - each defined URL trace to proper action in proper controller. Each action returns View Instance eg. HTML site, JSON object, URL redirect etc.

### View

Instance of data representation - object capable to accept data and format that in specific MIME type like html, js, png.

### Model

Instance of database table representation - each model is responsible for specific table in database. Can create, read, update and delete (CRUD) data in selected table.

### Channel

Besides simple HTTP server NodEvil contain WebSocket server - Channel is something like Controller for WS or WSS connections. Contain methods like: onMessage, onOpen, onClose.

### Auth

Representation of authorization methods - define access level (eg. user, employee, admin), data saved in session, and way of authentication.

### Client

Instance of HTTP client object - can appear in each HTTP 1.1 and HTTP 2.0 version. Send request and return response.

# Example

I give some example of using NodEvil in practise:

### Server
```javascript

import { Server } from "nodevil";
import Router from "./router";

const server = new Server({
    port: 443,
    httpVersion: "2.0",
    ssl: {
        privateKey: "./Ssl/priv.key",
        certificate: "./Ssl/cert.pem",
        chain: "./Ssl/ca.pem"
    },
    database: {
        engine: "postgre",
        host: "localhost",
        port: 5432,
        dbname: "test",
        username: "postgres",
        password: "postgres"
    }
});

server.withRouter(Router).init();

```

### Router

```javascript

import { Router } from "nodevil";
import LoginController from "./Controllers/LoginController";
import HomeController from "./Controllers/HomeController";

export default new Router()

//Login

.get("/login", LoginController, "index")

.post("/login", LoginController, "login")

.post("/logout", LoginController, "logout")

//Home

.get("/", HomeController, "index")

.get("/home", HomeController, "index")

.get("/favicon.ico", HomeController, "favicon")

```

### Controller

```javascript

import { Controller, View } from "nodevil";
import UserAuth from "../Auth/UserAuth";

export default class LoginController extends Controller {

    async index() {

        const authorized = await new UserAuth(this.session).authorized();

        return authorized ? 

            new View(this.session).route("/home").redirect()

            new View(this.session).site("./Tests/Views/login.html").show();

    }

    async login(params) {

        const authorization = await new UserAuth(this.session).authorization(params.username, params.password);

        return authorization ?

            new View(this.session).route("/home").redirect() :

            new View(this.session).site("./Views/loginWithException.html").show();

    }

    async logout() {

        await new UserAuth(this.session).reject();

        return new View(this.session).route("/login").redirect();

    }

}

```

### Model 

```javascript

import { Model } from "nodevil";

export default class User extends Model {

    table = "users";

    async checkUserExist(username) {

        const result = await this.from(this.table).where("username", username).first();

        return result !== null;

    }

    async login(username, password) {

        const result = await this.from(this.table).where("username", username).and("password", password).first();

        return result !== null;

    }

    async getField(username, field) {

        const result = await this.select(field).from(this.table).where("username", username).first();

        return result[field];

    }

}

```

### Auth

```javascript

import { Auth } from "nodevil";
import User from "../Models/User";

export default class UserAuth extends Auth {

    authName = "user";

    async authorized() {

        if (!this.session.has("authType") || this.session.get("authType") !== this.authName) {

            return false;

        }

        if (!this.session.has("username")) {

            return false;

        }

        const result = await new User().checkUserExist(this.session.get("username"));

        return result;

    }

    async authorization(username, password) {

        const result = await new User().login(username, password);

        if (!result) {

            return false;

        }

        this.session.set("authType", this.authName);

        this.session.set("username", username);

        return true;

    }

    async reject() {

        this.session.delete("authType");

        this.session.delete("username");

    }

}

```

### Channel

```javascript

import { Channel } from "nodevil";

export default class UserChannel extends Channel {

    onOpen() {

        console.log("Channel opened");

    }

    onMessage(message) {

        console.log(message);

        this.sendJSON("Foo");

    }

    onClose(code) {

        console.log(`Channel closed with code ${code}`);

    }

    onError(error) {

        console.log(error.message);

    }

}

```

### Client

```javascript

const response = await new Client("2.0")
    .Url("https://example.com/data")
    .Headers({
        "Accpet": "application/json",
        "Content-type": "application/json"
    })
    .Body({
        foo: "bar"
    })
    .post();

```

# IMPORTANT

NodEvil currently exist in ALPHA VERSION. Please don't use that in important projects before author of framework don't setup Beta Version (Tests for willings). Thanks :)
