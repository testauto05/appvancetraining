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
click(LeftMenu('Clothing'));
click(LeftMenu('Mugs'));
click(HomeButton('Home[1]'));
click(Products('Spree Bag'));
click(HomeButton('Home'));
click(LeftMenu('Spree'));
click(Products('Spree Mug'));
click(AddToCart('add-to-cart-button'));
click(Checkout('checkout-link'));
click(HomeButton('Home'));
click(LeftMenu('Spree'));
click(LeftMenu('Spree'));
click(Products('Spree Jr. Spaghetti'));
click(AddToCart('add-to-cart-button'));
click(Checkout('checkout-link'));
click(HomeButton('Home'));
click(LeftMenu('Spree'));
click(LeftMenu('Spree'));
click(HomeButton('Home'));
click(LeftMenu('Bags'));
click(HomeButton('Home[1]'));
click(LeftMenu('Clothing'));
click(LeftMenu('Mugs'));
click(HomeButton('Home[1]'));
click(Products('Spree Tote'));
click(HomeButton('Home'));
click(LeftMenu('Mugs'));
click(Products('Spree Stein'));
click(AddToCart('add-to-cart-button'));
click(HomeButton('Home'));
click(LeftMenu('Spree'));
click(LeftMenu('Spree'));
click(Products('Spree Jr. Spaghetti'));
click(AddToCart('add-to-cart-button'));
click(Checkout('checkout-link'));
click(HomeButton('Home'));
click(LeftMenu('Spree'));
click(LeftMenu('Spree'));
click(Products('Spree Jr. Spaghetti'));
click(AddToCart('add-to-cart-button'));
click(Checkout('checkout-link'));
click(HomeButton('Home'));
click(LeftMenu('Spree'));
click(LeftMenu('Spree'));
click(HomeButton('Home'));