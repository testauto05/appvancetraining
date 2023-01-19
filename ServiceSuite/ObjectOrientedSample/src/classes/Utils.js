/**
 * Utils class
 * Author: Appvance.inc, Oscar Mora
 */
class Utils {
    constructor() {};

    /**
     * Returns a deep-copied json object
     * @param {json} json 
     * @returns {json}
     */
    deepCopy(json) {
        return JSON.parse(JSON.stringify(json));
    }

    /**
     *  BASE64
     */
    btoa(st) {
        return new java.lang.String(java.util.Base64.getEncoder().encode(new java.lang.String(st).getBytes()));
    };
    atob(st) {
        return new java.lang.String(java.util.Base64.getDecoder().decode(new java.lang.String(st).getBytes()));
    }

    /**
     * EXTRACTIONS
     * 
     * Format can be PDF, XML, HTTP, HTML, Text, JSON, String, Zip and ZipContents
     * For valid target values check corresponding section at 
     * https://appvance.atlassian.net/wiki/external/738033666/ZTFjYmQ0N2VmNzEyNGM5NzkyZjhmN2VlNDRmMTRkNTU?atlOrigin=eyJpIjoiNjBlYThjNTVkMGM3NGI4ZWI0YzQzNjkxNTk2ZDljMTciLCJwIjoiYyJ9
     */
    extractOrNotFound(format, response, target) {
        const NOT_FOUND = "Not found.";
        var value;
        try {
            value = extract(format, response, target);
            if (typeof value == "undefined") {
                return NOT_FOUND;
            }
            return value;
        } catch (e) {
            return NOT_FOUND;
        }
    }

    /**
     *  RANDOM
     */
    randomNumber(length) {
        var result = '';
        for (var i = 0; i < length; i++) {
            result += Math.floor(Math.random() * 10);
        }
        return result;
    }
    randomEmail() {
        return this.randomLastName() + this.randomNumber(5) + "@example.com";
    }
    randomLastName() {
        var sylabs = 2 + Math.floor(Math.random() * 2)
        var result = '';
        var characters = 'bccdfghjkllmnnprrssttvwyz';
        var vocals = 'aeioeua';
        var charactersLength = characters.length;
        result += "SBCLKJMCH".charAt(Math.floor(Math.random() * 9));
        result += vocals.charAt(Math.floor(Math.random() * 7));
        sylabs--;
        for (var i = 0; i < sylabs; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            result += vocals.charAt(Math.floor(Math.random() * 7));
        }
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        return result;
    }

    /**
     *  Dates
     */
    dateToString(day) {
        var dd = String(day.getDate()).padStart(2, '0');
        var mm = String(day.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = day.getFullYear();
        return mm + '/' + dd + '/' + yyyy;;
    }
    getTodayDate() {
        var now = java.time.LocalDateTime.now();
        var formatter = java.time.format.DateTimeFormatter.ofPattern("MM/dd/yyyy");
        return now.withHour(0).withMinute(0).withSecond(0).format(formatter);
    }
    getYesterdayDate() {
        var now = java.time.LocalDateTime.now();
        var formatter = java.time.format.DateTimeFormatter.ofPattern("MM/dd/yyyy");
        return now.minus(1, java.time.temporal.ChronoUnit.DAYS).withHour(0).withMinute(0)
            .withSecond(0).format(formatter);
    }
    getDateISOString() {
        var st = new Date().toISOString();
        return st.replace(/\-/g, "_").replace(/\:/g, "_").replace(/\./g, "_");
    }

    /**
     *  CURRENCY STRING FORMAT
     */
    parseNumberToCurrency(aNumber) {
        if (aNumber == 0) {
            return ("$0.00");
        };
        var tempST = String(aNumber).replace(/[^0-9.-]+/g, "");
        try {
            var tempNumber = Number(parseFloat(tempST).toFixed(2));
            var tempLocale = tempNumber.toLocaleString(undefined, { minimumFractionDigits: 2 });
            return "$" + tempLocale;
        } catch (e) {
            log("Error converting to currency [" + aNumber + "], isNAN: " + isNaN(aNumber) + " - " + e.message);
            return "NA";
        }
    }
    parseCurrencyStringToNumber(currency) {
        if (typeof currency == "undefined" || currency == "") {
            log("Warning in parseCurrencyStringToNumber, expecting a number but got undefined or empty.");
            return -1;
        }
        if (currency == "0") {
            return 0;
        }
        if (currency.indexOf("(") !== -1) {
            currency = "-" + currency.replace(/[(|)]+/g, "")
        }
        return Number(String(currency).replace(/[^0-9.-]+/g, ""));
    }
}