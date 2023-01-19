/**
 * Samle test case for some APIS from spreecommerce.org
 * Check openAPI https://app.swaggerhub.com/apis/Appvance8/storefront-api/2.0.0
 * Author: Appvance Inc., Oscar Mora
 */
include("{mds}/../common/constants.js");
include("{mds}/../classes/Call.js");
include("{mds}/../classes/API.js");
include("{mds}/../classes/Account.js");
include("{mds}/../classes/Address.js");
include("{mds}/../classes/TestCase.js");
include("{mds}/../classes/Step.js");
include("{mds}/../classes/Utils.js");

if (typeof $ENV == "undefined") {
    HashDPL("{mds}/../../data/environments.csv", 0);
}
addGlobalHeader("Authorization", $TOKEN);
addGlobalHeader("Content-Type", "application/json");
addGlobalHeader("Accept", "application/json");
let utils = new Utils();

/**
 * TC001 - Create account then add, list and delete address
 */
class TC001_createAccount_UpdateAddress extends TestCase {
    execute() {
        this.start();
        let userEmail = utils.randomEmail();

        // Create Account

        let account = new Account(userEmail, "password1!");
        account.create();
        log("New account id: " + account.jsonResponse.data.id);
        let failed = account.lastCallHasErrors;

        // Create Address

        let address = new Address("John", "Doe", "", "775 Georgetown Road", "3rd Floor", "Qethesda", "3488545445002", "90210", "CA", "US", "home_" + utils.randomNumber(6));
        address.create();

        let addressID = address.jsonResponse.data.id;
        log("New address id: " + addressID);
        failed = failed || address.lastCallHasErrors;

        // Get all Addresses and verify if new address ID is present

        address.retrieve("firstname,lastname");
        if (!this.verifyAddressExists(address.jsonResponse, addressID)) {
            address.addError(ERRORCODE.LOGIC_ERROR, "ERROR: new address " + addressID + " was not found in list of addresses.");
        } else {
            log("Success: new address ID found");
        }

        failed = failed || address.lastCallHasErrors;
        failed ? this.endFailing("Errors found") : this.end();
        log("Status: " + testcase.status);
    }

    verifyAddressExists(response, id) {
        return (response.data.some(item => item.id === id));
    }

}

let testcase = new TC001_createAccount_UpdateAddress("TC001 - Create account then add, list and delete address");
testcase.execute();