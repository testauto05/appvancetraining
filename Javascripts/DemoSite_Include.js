setDescription("Navigate to the URL");
navigateTo("http://demosite.appvance.com");
setDescription("Click on Bags");
click(link("Bags"));
setDescription("Item exists");
assertExists(span("Ruby on Rails Bag"));
click(checkbox("Price_Range_$18.00_-_$20.00"));
setDescription("Click on Submit");
click(submit("Search[1]"));
setSearchRetries(1);
setDescription("Item does not exits in the page");
assertNotExists(span("Ruby on Rails Bag"));
setDescription("From drop down select all departments");
setSelected(select("taxon"),"All departments");
setDescription("Click on Search");
click(submit("Search"));
setDescription("Enter the value");
setValue(searchbox("keywords"),"Spree");
setDescription("Click on Search");
click(submit("Search"));
setDescription("Click on the product");
click(span("Spree Baseball Jersey"));
setDescription("Enter the quantity");
setValue(numberbox("quantity"),"3");
setDescription("Click on Add to cart");
click(submit("Add To Cart"));
setDescription("Click on Checkout");
click(submit("checkout"));
setDescription("Checkout page");
include("{ds}/Check_Out_Page.js");
