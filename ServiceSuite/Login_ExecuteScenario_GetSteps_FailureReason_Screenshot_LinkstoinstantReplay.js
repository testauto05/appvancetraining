var $baseURL = "http://ec2-x-x-x-xx.us-west-2.compute.amazonaws.com:8080";
var $scenario = "REPOSITORY/HOME/test.scenario";
var $execId = 0;
var $config = 0
var $failures = 0;
var $successes = 0;
var $textoutput = "";
var $transactions = [];

function getTimestamp() {
    return (new Date()).getTime();
}

function downloadScreenshot(link) {
    get(link);
}

//
// GET TRANSACTION DETAILS
//
function processTransaction($baseURL, $scenario, $transactionId) {
    var url = $baseURL+"/AppvanceServer/rest/execution/getUsecaseExecution?file="
                        + $scenario + "&usecaseExecutionId=" + $transactionId
                        + "&_=" + getTimestamp();
    var $json  = JSON.parse(get(url).getDataString());
    var $error = $json.error;
    var $txt   = "TRANSACTION DETAILS:\n";
    if ($error.length > 0) {
        $txt += "        Error: " + $error.substring(0, $error.indexOf('\n')) + "\n";
    }
    var $requests = $json.requests;
    if ($requests.length > 0) {
       $txt += "        Steps: \n";
       for (var i=0; i< $requests.length; i++) {
          if ($requests[i].isStep) {
              $txt += "           " + $requests[i].value + "\n";
          }
       }
    }
    
    var $integrations = $json.integrations.integrations;
    for (var i=0; i< $integrations.length; i++) {
        var $integration = $integrations[i];
        switch ($integration.type) {
            case "PNG" :
            case "JPG" :
                $txt += "        Screenshot: " + $integration.name + "\n";
                $val = $integration.value.substring($integration.value.indexOf('/AppvanceServer/rest'));
                $val = $baseURL + $val.substring(0, $val.indexOf("'"));
                $txt += "            link: " + $val + "\n";
                downloadScreenshot($val);
                break;
            case "ZIP" :
                $txt += "        Integration: " + $integration.name + "\n";
                $val = $integration.value.substring($integration.value.indexOf('/AppvanceServer/rest'));
                $val = $val.substring(0, $val.indexOf("'"));
                $txt += "            link: " + $baseURL + $val + "\n";
                break;
            case "String" :
                $txt += "        Integration: " + $integration.name + "   value: " + $integration.value + "\n";
                break;
            default:
                break;
        }
    }
    return $txt;
}

//
// LOGIN
//
function login($baseURL) {
    var $loginForm = formData();
    $loginForm.put("username","xxxxxxx");
    $loginForm.put("password","xxxxxxx");
    var $call = createPost($baseURL + "/AppvanceServer/rest/admin/loggin", $loginForm);
    var $resp = process($call).getDataString();
    if ($resp.indexOf("true") != -1) { 
        //
        // GET JSESSIONID COOKIE
        //
        var $jsession = getCookieValue($baseURL,"JSESSIONID");
        addGlobalHeader("cookie","JSESSION=" + $jsession);
        log("Login successful, JSESSION:" + $jsession)
        return true;
    } else {
        return false;
    }
}


var $resp = login($baseURL);
if ($resp === true) {

   //
   // START SCENARIO EXECUTION
   //

    var $resp = get($baseURL + "/AppvanceServer/rest/execution/startExecution?file=" + $scenario).getDataString();
    log("/startExecution - " + $resp);
    if ($resp.indexOf("running") != -1) {
      
        //
        // WAIT FOR SCENARIO TO END
        //
      
        var $status = get($baseURL + "/AppvanceServer/rest/execution/getStatus?file=" + $scenario + "&realtimeTXCount=2&isSaas=-1").getDataString();
        var $json = JSON.parse($status);
        wait(5000);
        while ($json.status !== "Invalid scenario" && $json.status !== "Done") {
            $resp   = get($baseURL + "/AppvanceServer/rest/execution/getStatus?file=" + $scenario + "&realtimeTXCount=2&isSaas=-1");
            $status = $resp.getDataString();
            $json   = JSON.parse($status);
            log("   getStatus - " + $json.status);
            wait(5000);
        }
        if ($json.status === "Done") {
          
           //
           // PULL SCENARIO RESULTS
           //
          
            $execId       = $json.execId;
            $successes    = $json.success;
            $failures     = $json.failures;
            $config       = $json.config;
            $textoutput   = $json.output;
            $transactions = $json.txs;
            $reports      = $json.reports;
            $pos          = $reports.indexOf("href=") + 6;
            $reportsLink  = $baseURL + "/" + $reports.substring($pos, $reports.indexOf("'", $pos + 1));
            var $txt  = "\nSCENARIO RESULTS:\n\n";
            $txt = $txt + "   Execution id: " + $execId + "\n";
            $txt = $txt + "   Config: "    + $config + "\n";
            $txt = $txt + "   Successes: " + $successes + "  Failures:" + $failures + "\n";
            $txt = $txt + "   Reports: "   + $reportsLink + "\n";
            $txt = $txt + "   Transactions:\n";
            for (var i = 0; i<$transactions.length; i++) {
                $txt += "\n      Txt Id   : " + $transactions[i].id + "\n";
                $txt += "      Testcase : " + $transactions[i].testcase + "\n";
                $txt += "      Succeeded: " + $transactions[i].succ + "\n";
                $txt += "      Duration : " + $transactions[i].dur + " ms\n";
                $txt += "      " + processTransaction($baseURL, $scenario, $transactions[i].id );
            }
        }
        log($txt);
    }
} 

//
// LOGOUT
//

var $resp = get($baseURL+"/AppvanceServer/rest/admin/logout");
log("logout: " + $resp.getDataString());




