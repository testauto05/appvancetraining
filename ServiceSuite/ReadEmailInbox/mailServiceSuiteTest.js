var mailClient = createMailClient("imap.gmail.com", "appvancecloud@gmail.com", "yourpassword", "IMAP");
mailClient.login();
mailClient.setFromFolder("Inbox");
var lastUnreadMails = mailClient.getLastUnreadMessages(1);
var code = ""
for(var i = 0; i < lastUnreadMails.size(); i++){
  code = lastUnreadMails.get(i);
}
mailClient.logout();
var code = code.substring(0,10);
log(code);
locker.put("Result",code);