processScript("{ds}/setup.js","js");
setVariablesIfNeeded('{ds}/dpl.csv', 'HashDPL', 0);
addSmartTagsLibrary("{ds}/Test1.stags");
addValidationsWorkbench("{ds}/Test1.valid");
setFailOnValidations(true);
prepareDomain($baseURL);
setFindOnlyVisible(true);
setFindOnlyEnabled(true);
selectMainFrame();
navigateTo($baseURL);
click(HomeButton('Home[1]'));
click(LeftMenu('Clothing'));
click(LeftMenu('Rails'));
click(LeftMenu('Bags'));
click(LeftMenu('Rails'));
click(LeftMenu('Clothing'));
click(LeftMenu('Bags'));
click(Products('Spree Tote'));
