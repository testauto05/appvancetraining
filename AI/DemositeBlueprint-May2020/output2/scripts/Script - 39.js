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
click(Products('Spree Tote'));
click(HomeButton('Home'));
click(LeftMenu('Ruby'));
click(LeftMenu('Bags'));
click(Products('Ruby on Rails Bag'));
click(HomeButton('Home'));
click(LeftMenu('Mugs'));
click(LeftMenu('Rails'));
click(LeftMenu('Clothing'));
click(LeftMenu('Mugs'));
click(Products('Spree Stein'));
click(AddToCart('add-to-cart-button'));
click(Checkout('checkout-link'));
setValue(CheckoutInputs1('order_email'), $email);
click(ContinueButton('commit[1]'));
click(HomeButton('Home'));
click(LeftMenu('Rails'));
click(LeftMenu('Clothing'));
click(LeftMenu('Spree'));
click(LeftMenu('Spree'));
click(LeftMenu('Rails'));
click(LeftMenu('Apache'));
click(Products('Apache Baseball Jersey'));
click(HomeButton('Home'));
click(LeftMenu('Rails'));
click(LeftMenu('Clothing'));
click(LeftMenu('Spree'));
click(LeftMenu('Spree'));
click(Products('Spree Mug'));
click(HomeButton('Home'));
click(LeftMenu('Clothing'));
click(LeftMenu('Mugs'));
click(Products('Spree Mug'));
click(HomeButton('Home'));
click(LeftMenu('Spree'));
click(LeftMenu('Spree'));
click(Products('Spree Tote'));
click(HomeButton('Home'));
click(LeftMenu('Spree'));
click(LeftMenu('Spree'));
click(LeftMenu('Rails'));
click(LeftMenu('Clothing'));
click(Products('Apache Baseball Jersey'));
