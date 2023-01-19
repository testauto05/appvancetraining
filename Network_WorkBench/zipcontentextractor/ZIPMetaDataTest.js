addNetworkLibrary("{ds}/ZIPMetaData.netx");
prepareDomain("https://appvance-qa.s3-us-west-2.amazonaws.com");
navigateTo("https://appvance-qa.s3-us-west-2.amazonaws.com/qa/folder.zip");
wait(10000);
log("ZIP META DATA: "+$ZIPMetaData);
var data = $ZIPMetaData;
var size = JSON.parse(data).size;
assertEquals("726 bytes",size);




