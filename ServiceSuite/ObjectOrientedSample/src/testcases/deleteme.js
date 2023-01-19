

const $ENV = "https://demo.spreecommerce.org";
const $TOKEN = "Bearer e4JHbmKONZ_jIR7ElanpiYB4lnYSMjSOjW97bGo9jaM";

addGlobalHeader("Authorization", $TOKEN);
addGlobalHeader("Content-Type", "application/json");
addGlobalHeader("Accept", "application/json");

post($ENV + "/api/v2/storefront/account", {"asdf":"asdf"});