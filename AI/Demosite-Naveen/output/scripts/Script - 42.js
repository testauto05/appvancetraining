processScript("{ds}/setup.js","js");
addSmartTagsLibrary("{ds}/est.stags");
//setFailOnValidations(false); // un-comment this line to skip errors 
prepareDomain($baseURL);
setFindOnlyVisible(true);
setFindOnlyEnabled(true);
selectMainFrame();
navigateTo($baseURL);
click(Item('Spree Bag'));
setValue(inputField('1'), $quantity);
click(btnAddToCart());
click(btn('Checkout'));
setValue(inputField('spree_user_email'), $email);
setValue(password('spree_user_password'), $password);
setValue(password('spree_user_password_confirmation'), $password);
click(btn('Create'));
setValue(inputField('order_bill_address_attributes_address1'), $street);
setValue(inputField('order_bill_address_attributes_city'), $city);
setValue(inputField('order_bill_address_attributes_firstname'), $name);
setValue(inputField('order_bill_address_attributes_lastname'), $lastname);
setValue(inputField('order_bill_address_attributes_phone'), $phone);
setValue(inputField('order_bill_address_attributes_zipcode'), $zip);
setSelected(select('order_bill_address_attributes_state_id'), "3570");
click(btn('Save and Continue'));
click(btn('Save and Continue'));
setValue(inputField('card_code'), $cccode);
setValue(inputField('card_expiry'), $exp);
setValue(inputField('card_number'), $creditCard);
click(btn('Save and Continue'));
click(btn('Place Order'));
