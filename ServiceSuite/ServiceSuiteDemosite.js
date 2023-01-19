var formPage = get("https://demosite.appvance.com/products/ruby-on-rails-tote");
log(getCookies("https://demosite.appvance.com/"));
var token = extract("html",formPage,'//form[@action="/orders/populate"]/input[@name="authenticity_token"]/@value');
log("Extracted "+token);
 
var form = formData();
form.put("authenticity_token",token);
form.put("utf-8",decodeURIComponent("%E2%9C%93"));
form.put("variant_id","1");
form.put("quantity","1");
form.put("button","");
 
var postData = createPost("https://demosite.appvance.com/orders/populate",form);
var purchaseResults = process(postData);
 
log("response:\n"+purchaseResults.getDataString());
 
assertContains(get("https://demosite.appvance.com/cart?variant_id=1").getDataString(),"Ruby on Rails Tote");
 
assertContains(get("https://demosite.appvance.com/cart_link").getDataString(),"$15.99");