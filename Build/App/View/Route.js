"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Route {
    constructor(session, path) {
        this.session = session;
        this.path = path;
    }
    redirect() {
        const response = {
            status: 301,
            headers: {
                "Location": this.path,
                "Set-cookie": "session=" + this.session.flush() + "; Path=/; HttpOnly; Secure; SameSite=strict;"
            }
        };
        return response;
    }
}
exports.default = Route;
