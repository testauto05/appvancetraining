var $baseURL = "http://localhost:8080";
var $scenario = "C://Git3.0//trainingscripts//DS3_with_Java//servicesuiteandassert//poc.scenario"; ///Give the scenario location
var $loginForm = formData();
var $execId = 0;
var $config = 0
var $failures = 0;
var $successes = 0;
var $textoutput = "";
var $transactions = [];
var price = "5,350";
//
// LOGIN
//
$loginForm.put("username","appvance");
$loginForm.put("password","appvance");
var $call = createPost($baseURL+"/AppvanceServer/rest/admin/loggin", $loginForm);
var $resp = process($call).getDataString();
log("/logged - "+$resp);
if ($resp.indexOf("true") != -1) {
   //
   // GET JSESSIONID COOKIE
   //
    var $jsession = getCookieValue($baseURL,"JSESSIONID");
    addGlobalHeader("cookie","JSESSION=" + $jsession);
   //
   // START SCENARIO EXECUTION
   //
  
    var $resp = get($baseURL+"/AppvanceServer/rest/execution/startExecution?file=" + $scenario).getDataString();
    log("/startExecution - " + $resp);
    if ($resp.indexOf("running") != -1) {
        //
        // WAIT FOR SCENARIO TO END
        //
      wait(90000);
        var $status = get($baseURL+"/AppvanceServer/rest/execution/getStatus?file="+$scenario+"&realtimeTXCount=2&isSaas=-1").getDataString();
        var $json = JSON.parse($status);
        wait(5000);
        while ($json.status !== "Invalid scenario" && $json.status !== "Done") {
            $resp   = get($baseURL+"/AppvanceServer/rest/execution/getStatus?file="+$scenario+"&realtimeTXCount=2&isSaas=-1");
            $status = $resp.getDataString();
            $json   = JSON.parse($status);
            log("   getStatus - "+$json.status);
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
            $reportsLink  = $baseURL + "/UI/" + $reports.substring($pos, $reports.indexOf("'", $pos + 1));
            var $txt  = "SCENARIO RESULTS:\n\n";
            $txt = $txt + "   Execution id: " + $execId + "\n";
            $txt = $txt + "   Config: " + $config + "\n";
            $txt = $txt + "   Successes: " + $successes + "  Failures:" + $failures + "\n";
            $txt = $txt + "   Reports: " + $reportsLink + "\n";
            $txt = $txt + "   Transactions:\n";
            for (var i = 0; i<$transactions.length; i++) {
                $txt = $txt + "\n      Txt Id   : " + $transactions[i].id + "\n";
                $txt = $txt +   "      Testcase : " + $transactions[i].testcase + "\n";
                $txt = $txt +   "      Succeeded: " + $transactions[i].succ + "\n";
                $txt = $txt +   "      Duration : " + $transactions[i].dur + " ms\n";
            }
        }
        log($txt);
         $resp   = get($baseURL+"/AppvanceServer/rest/execution/getFunctionalTree?file="+encodeURIComponent($scenario)+"&depth=3");
            $status = $resp.getDataString();  
      log("steps output : " + $status);
      $data = JSON.stringify($status);
      var index = $data.indexOf("Log");
      var priceFromScript = $data.substring(index+4,index+9);
      log("price:" + priceFromScript);
            wait(5000);
      assertEquals(priceFromScript,price);
    }
} 
//
// LOGOUT
//
var $resp = get($baseURL+"/AppvanceServer/rest/admin/logout");
log("logout: " + $resp.getDataString());