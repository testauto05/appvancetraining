let ERRORS = JSON.parse(readText("{mds}/../../data/errors.json"));
/**
 * Call class
 * Author: Appvance.inc, Oscar Mora
 */
class Call {

    constructor(json, endpoint) {
        if (typeof endpoint == "undefined") {
            endpoint = $ENV; // if no endpoint sent, then use global $ENV var
        }
        this.endpoint = endpoint;
        this.method = json.method;
        this.codes = json.validCodes;
        this.description = json.description;
        this.path = json.path;
        this.payload = null;
        if (json.hasOwnProperty('payload')) {
            this.payload = json.payload;
        }
        this.query = [];
        if (json.hasOwnProperty('query')) {
            this.query = this.parseQuery(json.query);
        }

        this.response = null;
        this.jsonResponse = null;
        this.errors = [];
    }

    execute() {
        log("\n" + this.description);
        this.response = null;
        let call = null;
        if (this.method == "POST") {
            if (this.payload) {
                call = createPost(this.endpoint + this.path + this.query, this.payload);
            } else {
                call = createPost(this.endpoint + this.path + this.query);
            }
        } else if (this.method == "PATCH") {
            if (this.payload) {
                call = createPost(this.endpoint + this.path + this.query, this.payload);
            } else {
                call = createPost(this.endpoint + this.path + this.query);
            }
        } else if (this.method == "GET") {
            call = createGet(this.endpoint + this.path + this.query);
        } else if (this.method == "DELETE") {
            call = createDelete(this.endpoint + this.path);
        } else {
            log("Error executing call: method " + this.method + " has not been implemented yet (" + this.path + ")");
            return null;
        };
        this.response = process(call);
        this.validate(this.response);
        return this.response;
    };


    validate(response) {
        this.errors = [];
        response.status;
        if (this.codes.length !== 0) {
            if (this.codes.some(item => item === response.status)) {
                log("Response code " + response.status + " (in JSON request spec)")
            } else {
                this.addError(ERRORCODE.UNEXPECTED_RESPONSE_CODE, "Response code out of specs: " + response.status);
            };
        }
        try {
            this.jsonResponse = JSON.parse(response.getDataString());
        } catch (e) {
            this.addError(ERRORCODE.INVALID_JSON, response.getDataString());
        }
        if (this.jsonResponse.hasOwnProperty("error")) {
            this.addError(ERRORCODE.RESPONSE_ERROR, response.getDataString());
        };
    }

    hasErrors() {
        return this.errors != null && this.errors.length > 0;
    }

    addError(code, details) {
        log("  ERROR: " + ERRORS[code + ""].error);
        log("  Error Details:\n" + details);
        this.errors.push({ "code": code, "details": details });
    }

    parseQuery(jsonQuery) {
        let st = "?";
        Object.keys(jsonQuery).forEach(function(key) {
            st = st + key + "=" + jsonQuery[key] + "&";
        });
        if (st == "&") { st = ""; } else { st = st.slice(0, -1); }
        return st;
    }


}