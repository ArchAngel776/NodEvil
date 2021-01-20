const Model = require("../../Build/index").Model;

module.exports = class User extends Model {

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