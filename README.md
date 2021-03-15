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

Basic class - create server instance, contain information as: Http version, port number, SSL paths, Database configuration. Is responsible for server core work.
