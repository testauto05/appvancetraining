/**
 * Step class
 * Author: Appvance.inc, Oscar Mora
 */
class Step {
    constructor(stepName, stopExecutionOnError) {
        this.name = stepName;
        return this;
    }
    start() {
        startStep(this.name);
        log("STEP: " + this.name);
        return this;
    }
    end() {
        endStep(this.name);
        log("STEP: " + this.name)
    }
    endFailingStep(error, stopExecution) {
        endFailingStep(this.name);
        log("STEP: " + this.name)
        if (stopExecution) {
            throw "STEP FAILURE: " + error;
        }
    }
}