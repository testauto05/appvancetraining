/**
 * Class API
 * Author: Appvance Inc, Oscar Mora
 */
class API {
    constructor() {
        this.jsonResponse = {};
        this.lastCall = null;
        this.lastReponse = null;
        this.lastCallHasErrors = false;
    }
    executeCall(json) {
        let call = new Call(json);
        let response = call.execute();
        this.jsonResponse = call.jsonResponse;
        this.lastResponse = response;
        this.lastCallHasErrors = call.hasErrors();
        return response;
    }

    logJsonResponse() {
        log(JSON.stringify(this.lastJsonResponse));
    }
}