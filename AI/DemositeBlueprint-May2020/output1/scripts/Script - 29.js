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
click(LeftMenu('Bags'));
click(LeftMenu('Rails'));
click(LeftMenu('Spree'));
click(LeftMenu('Clothing'));
click(LeftMenu('Rails'));
click(LeftMenu('Clothing'));
click(LeftMenu('Ruby'));
click(LeftMenu('Clothing'));
click(Products('Ruby Baseball Jersey[1]'));
click(AddToCart('add-to-cart-button'));
click(Checkout('checkout-link'));
setValue(CheckoutInputs1('order_email'), $email);
click(ContinueButton('commit[1]'));
click(HomeButton('Home'));
click(LeftMenu('Bags'));
click(LeftMenu('Rails'));
click(LeftMenu('Clothing'));
click(LeftMenu('Bags'));
click(LeftMenu('Ruby'));
click(LeftMenu('Clothing'));
click(LeftMenu('Rails'));
click(LeftMenu('Spree'));
click(LeftMenu('Bags'));
click(LeftMenu('Rails'));
click(LeftMenu('Spree'));
click(LeftMenu('Spree'));
click(LeftMenu('Clothing'));
click(Products('Spree Baseball Jersey'));
click(AddToCart('add-to-cart-button'));
click(HomeButton('Home'));
click(LeftMenu('Clothing'));
click(Products('Spree Baseball Jersey'));
click(AddToCart('add-to-cart-button'));
click(Checkout('checkout-link'));
setValue(CheckoutInputs1('order_email'), $email);
click(ContinueButton('commit[1]'));
click(HomeButton('Home'));
