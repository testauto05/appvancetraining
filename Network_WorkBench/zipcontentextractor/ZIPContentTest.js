addNetworkLibrary("{ds}/ZIPContent.netx");
prepareDomain("https://appvance-qa.s3-us-west-2.amazonaws.com");
navigateTo("https://appvance-qa.s3-us-west-2.amazonaws.com/qa/folder.zip");
wait(10000);
log("ZIP Content: "+$ZIPContent);
var text = $ZIPContent;
assertTrue(text.startsWith("Appvance"));  
assertTrue(text.contains("$INSTALL_PATH"));


