require("./router");
const Server = require("../Build/index").Server;

const server = new Server({
    port: 443,
    httpVersion: "2.0",
    ssl: {
        privateKey: "./Tests/Ssl/priv.key",
        certificate: "./Tests/Ssl/cert.pem"
    },
    database: {
        engine: "postgre",
        host: "localhost",
        port: 5432,
        dbname: "jedziemyjedziemy",
        username: "postgres",
        password: "72assaw123"
    }
});

server.init();