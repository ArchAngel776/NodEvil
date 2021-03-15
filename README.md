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
