/**
 * Class Tetscase
 * Author: Appvance Inc., Oscar Mora
 */
class TestCase {

    constructor(name) {
        this.name = name;
        this.status = STATUS.NONE;
    }

    start() {
        this.status = STATUS.RUNNING;
        startSummaryStep(this.name);
    }

    end() {
        this.status = STATUS.PASSED;
        endSummaryStep(this.name);
    }

    endFailing(error) {
        this.status = STATUS.FAILED;
        endFailingSymmaryStep(error)
    }
}