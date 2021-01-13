const Model = require("../../Build/index").Model;

module.exports = class User extends Model {

    table = "users";

    async getUsers() {

        const result = await this.from(this.table).get();

        return result;

    }

}