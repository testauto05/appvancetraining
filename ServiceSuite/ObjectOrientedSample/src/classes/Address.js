/**
 * Address API's
 * Check openAPI https://app.swaggerhub.com/apis/Appvance8/storefront-api/2.0.0
 * Author: Appvance Inc, Oscar Mora
 */
class Address extends API {
    constructor(firstname, lastname, company, address1, address2, city, phone, zipcode, state_name, country_iso, label) {
        super();
        this.firstname = firstname;
        this.lastname = lastname;
        this.company = company;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.phone = phone;
        this.zipcode = zipcode;
        this.state_name = state_name;
        this.country_iso = country_iso;
        this.label = label;
    }

    create() {
        const json = JSON.parse(JSON.stringify(ACCOUNT_APIS.address.create));
        json.payload.address.firstname = this.firstname;
        json.payload.address.lastname = this.lastname;
        json.payload.address.company = this.company;
        json.payload.address.address1 = this.address1;
        json.payload.address.address2 = this.address2;
        json.payload.address.city = this.city;
        json.payload.address.phone = this.phone;
        json.payload.address.zipcode = this.zipcode;
        json.payload.address.state_name = this.state_name;
        json.payload.address.country_iso = this.country_iso;
        json.payload.address.label = this.label;
        return this.executeCall(json);
    }

    retrieve(fields) {
        const json = JSON.parse(JSON.stringify(ACCOUNT_APIS.address.list));
        json.query['fields[address]'] = fields;
        return this.executeCall(json);
    }
}