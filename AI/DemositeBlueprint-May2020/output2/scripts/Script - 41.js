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
click(LeftMenu('Apache'));
click(Products('Apache Baseball Jersey'));
click(HomeButton('Home'));
click(LeftMenu('Rails'));
click(LeftMenu('Apache'));
click(LeftMenu('Rails'));
click(LeftMenu('Clothing'));
click(LeftMenu('Ruby'));
click(LeftMenu('Bags'));
click(LeftMenu('Spree'));
click(HomeButton('Home'));
click(LeftMenu('Spree'));
click(LeftMenu('Spree'));
click(LeftMenu('Clothing'));
click(LeftMenu('Spree'));
click(Products('Spree Mug'));
click(HomeButton('Home'));
click(LeftMenu('Clothing'));
click(LeftMenu('Mugs'));
click(LeftMenu('Ruby'));
click(LeftMenu('Mugs'));
click(LeftMenu('Spree'));
click(HomeButton('Home'));
click(LeftMenu('Mugs'));
click(LeftMenu('Rails'));
click(HomeButton('Home'));
click(LeftMenu('Rails'));
click(LeftMenu('Clothing'));
click(LeftMenu('Mugs'));
click(LeftMenu('Ruby'));
click(LeftMenu('Mugs'));
click(LeftMenu('Ruby'));
click(LeftMenu('Rails'));
click(LeftMenu('Apache'));
click(LeftMenu('Spree'));
click(LeftMenu('Spree'));
click(HomeButton('Home'));