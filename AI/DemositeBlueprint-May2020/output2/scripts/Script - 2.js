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
click(LeftMenu('Clothing'));
click(Products('Spree Jr. Spaghetti[1]'));
click(AddToCart('add-to-cart-button'));
click(Checkout('checkout-link'));
setValue(CheckoutInputs1('order_email'), $email);
click(ContinueButton('commit[1]'));
click(HomeButton('Home'));
click(LeftMenu('Spree'));
click(LeftMenu('Spree'));
click(HomeButton('Home'));
click(LeftMenu('Spree'));
click(LeftMenu('Spree'));
click(HomeButton('Home'));
click(LeftMenu('Spree'));
click(LeftMenu('Spree'));
click(HomeButton('Home'));
click(LeftMenu('Spree'));
click(LeftMenu('Spree'));
click(LeftMenu('Clothing'));
click(Products('Spree Jr. Spaghetti[1]'));
click(HomeButton('Home'));
click(LeftMenu('Spree'));
click(LeftMenu('Spree'));
click(LeftMenu('Clothing'));
click(Products('Spree Jr. Spaghetti[1]'));
click(HomeButton('Home'));
click(LeftMenu('Spree'));
click(LeftMenu('Spree'));
click(LeftMenu('Clothing'));
click(Products('Spree Jr. Spaghetti[1]'));
click(HomeButton('Home'));
click(LeftMenu('Spree'));
click(HomeButton('Home'));
