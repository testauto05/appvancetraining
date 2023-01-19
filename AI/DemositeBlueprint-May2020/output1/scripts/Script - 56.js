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
click(Products('Spree Baseball Jersey'));
click(AddToCart('add-to-cart-button'));
click(Checkout('checkout-link'));
setValue(CheckoutInputs1('order_email'), $email);
click(ContinueButton('commit[1]'));
click(HomeButton('Home'));
click(Products('Ruby on Rails Ringer T-Shirt'));
click(HomeButton('Home[1]'));
click(LeftMenu('Clothing'));
click(LeftMenu('Bags'));
click(Products('Ruby on Rails Tote'));
click(AddToCart('add-to-cart-button'));
click(Checkout('checkout-link'));
setValue(CheckoutInputs1('order_email'), $email);
click(ContinueButton('commit[1]'));
click(HomeButton('Home'));
click(LeftMenu('Clothing'));
click(Products('Ruby Baseball Jersey[1]'));
click(HomeButton('Home[1]'));
click(LeftMenu('Clothing'));
click(LeftMenu('Bags'));
click(LeftMenu('Spree'));
click(Products('Spree Jr. Spaghetti'));
click(AddToCart('add-to-cart-button'));
click(Checkout('checkout-link'));
setValue(CheckoutInputs1('order_email'), $email);
click(ContinueButton('commit[1]'));
click(HomeButton('Home'));
click(Products('Ruby on Rails Jr. Spaghetti'));
click(AddToCart('add-to-cart-button'));
click(Checkout('checkout-link'));
setValue(CheckoutInputs1('order_email'), $email);
click(ContinueButton('commit[1]'));
click(HomeButton('Home'));
click(Products('Ruby on Rails Tote'));
click(AddToCart('add-to-cart-button'));
click(HomeButton('Home'));
click(LeftMenu('Rails'));
click(LeftMenu('Spree'));
click(Products('Spree Ringer T-Shirt'));
click(AddToCart('add-to-cart-button'));
click(Checkout('checkout-link'));
click(HomeButton('Home'));
click(LeftMenu('Clothing'));
click(LeftMenu('Rails'));
click(Products('Ruby on Rails Bag'));
click(AddToCart('add-to-cart-button'));
click(Checkout('checkout-link'));
click(HomeButton('Home'));
click(LeftMenu('Clothing'));
click(LeftMenu('Rails'));
click(Products('Ruby on Rails Bag'));
click(AddToCart('add-to-cart-button'));
click(Checkout('checkout-link'));
setValue(CheckoutInputs1('order_email'), $email);
click(ContinueButton('commit[1]'));
click(HomeButton('Home'));
click(Products('Ruby on Rails Tote'));
click(AddToCart('add-to-cart-button'));
click(HomeButton('Home'));
click(LeftMenu('Clothing'));
click(LeftMenu('Rails'));
click(Products('Ruby on Rails Bag'));
click(AddToCart('add-to-cart-button'));
click(Checkout('checkout-link'));
setValue(CheckoutInputs1('order_email'), $email);
click(ContinueButton('commit[1]'));
setValue(CheckoutInputs1('order_bill_address_attributes_firstname'), $Firstname);
setValue(CheckoutInputs1('order_bill_address_attributes_lastname'), $LastName);
setValue(CheckoutInputs1('order_bill_address_attributes_address1'), $StreetAddress);
setValue(CheckoutInputs1('order_bill_address_attributes_city'), $City);
setValue(CheckoutInputs1('order_bill_address_attributes_zipcode'), $zip);
setValue(CheckoutInputs1('order_bill_address_attributes_phone'), $phone);
setSelected(select("form-control required"),"California");
click(ContinueButton('commit'));
click(HomeButton('Home'));
click(Products('Ruby Baseball Jersey'));
click(AddToCart('add-to-cart-button'));
click(Checkout('checkout-link'));
setValue(CheckoutInputs1('order_email'), $email);
click(ContinueButton('commit[1]'));
click(HomeButton('Home'));
click(LeftMenu('Clothing'));
click(LeftMenu('Rails'));
click(LeftMenu('Apache'));
click(Products('Apache Baseball Jersey'));
click(AddToCart('add-to-cart-button'));