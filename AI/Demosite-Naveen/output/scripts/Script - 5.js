processScript("{ds}/setup.js","js");
addSmartTagsLibrary("{ds}/est.stags");
//setFailOnValidations(false); // un-comment this line to skip errors 
prepareDomain($baseURL);
setFindOnlyVisible(true);
setFindOnlyEnabled(true);
selectMainFrame();
navigateTo($baseURL);
click(brandLink('Rails'));
