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
click(LeftMenu('Spree'));
click(LeftMenu('Spree'));
click(HomeButton('Home'));
click(Products('Ruby Baseball Jersey'));
click(HomeButton('Home'));
click(LeftMenu('Mugs'));
click(LeftMenu('Ruby'));
click(LeftMenu('Spree'));
click(HomeButton('Home'));
click(Products('Apache Baseball Jersey'));
click(HomeButton('Home'));
click(LeftMenu('Rails'));
click(LeftMenu('Apache'));
click(LeftMenu('Spree'));
click(HomeButton('Home'));
click(Products('Spree Baseball Jersey'));
click(HomeButton('Home'));
click(LeftMenu('Spree'));
click(LeftMenu('Spree'));
click(Products('Spree Tote'));
click(HomeButton('Home'));
click(LeftMenu('Spree'));
click(HomeButton('Home'));
click(Products('Spree Ringer T-Shirt'));
click(HomeButton('Home'));
click(LeftMenu('Rails'));
click(LeftMenu('Clothing'));
click(LeftMenu('Spree'));
click(HomeButton('Home'));
click(Products('Spree Tote'));
click(HomeButton('Home'));
click(LeftMenu('Ruby'));
click(LeftMenu('Bags'));
click(LeftMenu('Spree'));
click(HomeButton('Home'));
click(LeftMenu('Bags'));
click(HomeButton('Home[1]'));
click(LeftMenu('Clothing'));
click(LeftMenu('Mugs'));
click(HomeButton('Home[1]'));
click(Products('Ruby on Rails Bag'));
click(HomeButton('Home'));
click(LeftMenu('Mugs'));
click(Products('Ruby on Rails Mug'));
click(HomeButton('Home'));
click(LeftMenu('Clothing'));
click(LeftMenu('Mugs'));
click(HomeButton('Home[1]'));
click(Products('Ruby on Rails Bag'));