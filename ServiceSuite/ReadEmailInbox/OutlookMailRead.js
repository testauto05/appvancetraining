log("Access the mail outlook account");
var mailClient = createMailClient("imap.outlook.com", "emailaddressgoeshere", "passwordgoeshere", "IMAP");
wait(5000);
mailClient.login();
log("Login Outlook Account");
mailClient.setFromFolder("Inbox");
log("Access the Inbox folder");
var lastUnreadMails = mailClient.getLastUnreadMessages(1);
var url;
for(var i = 0; i < lastUnreadMails.size(); i++){
  if(lastUnreadMails.get(i).getSubject().contains("Subject of the Email goes here")){
    //log("Fetch the url from this body" + lastUnreadMails.get(i).getBody());
    url = urlify(lastUnreadMails.get(i).getBody()); }
}
mailClient.logout();
wait(5000);
log(url);
locker.put("Result",url);
function urlify(text){
  var found = text.indexOf("Content of the message body from where the indexing should start");
  text = text.substring(found);
  found = text.indexOf("href=\"");
  text = text.substring(found+6);
  var last = text.indexOf("\"");
  return text.substring(0,last).replace("&amp;","&");
	
}