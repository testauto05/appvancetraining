setVariablesIfNeeded('{ds}/demosite_DPl.csv','HashDPL',0);
setDescription("Enter email");
setValue(emailbox("order_email"),"test@appvance.com");
setDescription("Click on continue");
click(submit("Continue"));
setValue(textbox("order_bill_address_attributes_firstname"),"Test");
setValue(textbox("order_bill_address_attributes_lastname"),"Appvance");
setValue(textbox("order_bill_address_attributes_address1"),"Santa Clara");
setValue(textbox("order_bill_address_attributes_city"),"San Jose");
setValue(textbox("order_bill_address_attributes_zipcode"),"123456");
setValue(telephonebox("order_bill_address_attributes_phone"),"9632587410");
setDescription("Click on Save and continue");
click(submit("Save and Continue"));
