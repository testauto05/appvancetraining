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
click(LeftMenu('Ruby'));
click(LeftMenu('Bags'));
click(LeftMenu('Clothing'));
click(LeftMenu('Mugs'));
click(LeftMenu('Rails'));
click(LeftMenu('Clothing'));
click(LeftMenu('Mugs'));
click(LeftMenu('Ruby'));
click(LeftMenu('Rails'));
click(LeftMenu('Apache'));
click(LeftMenu('Spree'));
click(LeftMenu('Spree'));
click(LeftMenu('Mugs'));
click(LeftMenu('Rails'));
click(LeftMenu('Spree'));
click(HomeButton('Home'));
click(LeftMenu('Bags'));
click(HomeButton('Home[1]'));
click(Products('Ruby on Rails Tote'));
click(AddToCart('add-to-cart-button'));
click(HomeButton('Home'));
click(LeftMenu('Ruby'));
click(LeftMenu('Bags'));
click(LeftMenu('Spree'));
click(HomeButton('Home'));
click(Products('Ruby on Rails Bag'));
click(AddToCart('add-to-cart-button'));
click(HomeButton('Home'));
click(LeftMenu('Ruby'));
click(LeftMenu('Bags'));