var $baseURL = "http://localhost:8080";
//
// LOGIN
//
$loginForm.put("username","appvance");
$loginForm.put("password","appvance");
var $call = createPost($baseURL+"/AppvanceServer/rest/admin/logginForServices", $loginForm);
var $resp = process($call).getDataString();
log("/logged - "+$resp);
if ($resp.indexOf("true") != -1) {
   //
   // GET JSESSIONID COOKIE
   //
    var $jsession = getCookieValue($baseURL,"JSESSIONID");
    addGlobalHeader("cookie","JSESSION=" + $jsession);
   //
   // GET functional report EXECUTION
   //
   $resp = get($baseURL+"/AppvanceServer/rest/reports/getFunctionalReport?config=default&exeId=1611852517863");
  log($resp.getDataString());
}
//
// LOGOUT
//
var $resp = get($baseURL+"/AppvanceServer/rest/admin/logout");
log("logout: " + $resp.getDataString());                                                                     