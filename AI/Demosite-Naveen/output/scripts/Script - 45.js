processScript("{ds}/setup.js","js");
addSmartTagsLibrary("{ds}/est.stags");
//setFailOnValidations(false); // un-comment this line to skip errors 
prepareDomain($baseURL);
setFindOnlyVisible(true);
setFindOnlyEnabled(true);
selectMainFrame();
navigateTo($baseURL);
click(Item('Ruby on Rails Jr. Spaghetti'));
setValue(inputField('1'), $quantity);
click(btnAddToCart());
