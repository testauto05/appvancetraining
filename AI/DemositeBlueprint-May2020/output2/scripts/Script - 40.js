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
click(LeftMenu('Clothing'));
click(LeftMenu('Mugs'));
click(LeftMenu('Rails'));
click(Products('Ruby on Rails Stein'));
click(HomeButton('Home'));
click(LeftMenu('Spree'));
click(HomeButton('Home'));
click(LeftMenu('Spree'));
click(LeftMenu('Spree'));
click(LeftMenu('Bags'));
click(Products('Spree Bag'));
click(HomeButton('Home'));
click(LeftMenu('Mugs'));
click(LeftMenu('Rails'));
click(LeftMenu('Clothing'));
click(LeftMenu('Mugs'));
click(LeftMenu('Spree'));
click(LeftMenu('Spree'));
click(LeftMenu('Apache'));
click(Products('Apache Baseball Jersey'));
click(AddToCart('add-to-cart-button'));
click(Checkout('checkout-link'));
setValue(CheckoutInputs1('order_email'), $email);
click(ContinueButton('commit[1]'));
click(HomeButton('Home'));
click(LeftMenu('Ruby'));
click(LeftMenu('Bags'));
click(LeftMenu('Rails'));
click(LeftMenu('Clothing'));
click(LeftMenu('Spree'));
click(LeftMenu('Spree'));
click(HomeButton('Home'));
click(LeftMenu('Ruby'));
click(LeftMenu('Bags'));
click(LeftMenu('Rails'));
click(LeftMenu('Clothing'));
click(LeftMenu('Spree'));
click(HomeButton('Home'));
click(LeftMenu('Clothing'));
click(LeftMenu('Mugs'));
click(LeftMenu('Rails'));
click(LeftMenu('Clothing'));
click(LeftMenu('Spree'));
click(LeftMenu('Spree'));
click(HomeButton('Home'));
click(LeftMenu('Spree'));
click(LeftMenu('Spree'));
click(HomeButton('Home'));