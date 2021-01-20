const Auth = require("../../Build/index").Auth;
const User = require("../Models/User");

module.exports = class UserAuth extends Auth {

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

    async getField(fieldName) {

        const username = this.session.get("username");

        const result = await new User().getField(username, fieldName);

        return result;

    }

    async reject() {

        this.session.delete("authType");

        this.session.delete("username");

    }

}