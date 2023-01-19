var extractVariable = extract("PDF", getResponseDownload("apple-privacy-policy-en-ww.pdf"),"pageSnapshot:0");
writeBytes("{ds}/file.png", extractVariable); 
var extractVariable = extract("PDF", getResponseDownload("apple-privacy-policy-en-ww.pdf"),"pageSnapshot:1");
writeBytes("{ds}/file1.png", extractVariable);
var extractVariable = extract("PDF", getResponseDownload("apple-privacy-policy-en-ww.pdf"),"pageSnapshot:2");
writeBytes("{ds}/file2.png", extractVariable); 