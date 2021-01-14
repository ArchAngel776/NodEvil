const Auth = require("../../Build/index").Auth;
const User = require("../Models/User");

module.exports = class UserAuth extends Auth {

    async authorized() {

        if (!this.session.has("username") || !this.session.has("password")) {

            return false;

        }

        const username = this.session.get("username"), password = this.session.get("password");

        const user = await new User().from("users").select("username", "password").where("username", username).and("password", password).first();

        if (user === null) {

            return false;

        }

        if (user.username !== username || user.password !== password) {

            return false;

        }

        return true;

    }

    async authorization(username, password) {

        const user = await new User().from("users").select("username", "password").where("username", username).and("password", password).first();

        if (user === null) {

            return false;

        }

        this.session.set("username", user.username);

        this.session.set("password", user.password);

        return true;

    }

    async getField(fieldName) {

        const username = this.session.get("username"), password = this.session.get("password");

        const user = await new User().from("users").where("username", username).and("password", password).first();

        return user[fieldName];

    }

    async reject() {

        this.session.delete("username");

        this.session.delete("password");

    }

}