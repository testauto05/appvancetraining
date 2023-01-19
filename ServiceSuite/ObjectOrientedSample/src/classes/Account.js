const ACCOUNT_APIS = JSON.parse(readText("{mds}/../../data/account.json"));

/**
 * Account API's
 * Implements API's for accounts
 * Check openAPI https://app.swaggerhub.com/apis/Appvance8/storefront-api/2.0.0
 * Author: Appvance Inc, Oscar Mora
 */
class Account extends API {
    constructor(email, password) {
        super();
        this.email = email;
        this.password = password
    }

    create() {
        const json = utils.deepCopy(ACCOUNT_APIS.create);
        json.payload.user.email = this.email;
        json.payload.user.password = this.password;
        json.payload.user.password_confirmation = this.password;
        return this.executeCall(json);
    }

    retrieve(include, fields) {
        const json = utils.deepCopy(ACCOUNT_APIS.retrieve);
        json.query['include'] = include;
        json.query['fields[user]'] = fields;
        return this.executeCall(json);
    }
}