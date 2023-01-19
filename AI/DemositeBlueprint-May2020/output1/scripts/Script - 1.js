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
click(Products('Ruby on Rails Ringer T-Shirt'));
click(HomeButton('Home[1]'));
click(LeftMenu('Clothing'));
click(LeftMenu('Rails'));
click(LeftMenu('Bags'));
click(LeftMenu('Rails'));
click(Products('Ruby on Rails Bag'));
click(AddToCart('add-to-cart-button'));
click(Checkout('checkout-link'));
setValue(CheckoutInputs1('order_email'), $email);
click(ContinueButton('commit[1]'));
click(HomeButton('Home'));
click(LeftMenu('Clothing'));
click(LeftMenu('Rails'));
click(Products('Ruby on Rails Bag'));
click(AddToCart('add-to-cart-button'));
click(Checkout('checkout-link'));
setValue(CheckoutInputs1('order_email'), $email);
click(ContinueButton('commit[1]'));
click(HomeButton('Home'));
click(LeftMenu('Apache'));
click(Products('Apache Baseball Jersey'));
click(AddToCart('add-to-cart-button'));
click(HomeButton('Home'));
click(LeftMenu('Clothing'));
click(LeftMenu('Rails'));
