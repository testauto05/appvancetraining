setFailOnValidations(false);
addNetworkLibrary("{mds}/networkDemosite.netx");

addGlobalHeader('Connection','keep-alive');
//addGlobalHeader('Accept-Encoding','gzip');
addGlobalHeader('User-Agent','Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:85.0) Gecko/20100101 Firefox/85.0');

var page = open('https://demosite.appvance.com:443/t/mugs');
  var htmlResp= page.resp;
  var htmlExtract = extractHTML(htmlResp);
  var $corr1= htmlExtract.getAttrByXPath('//html/head/link[1]/@href');
  $corr1 = baseURL($corr1);
  var $corr2= htmlExtract.getAttrByXPath('//html/head/link[2]/@href');
  var $corr3= htmlExtract.getAttrByXPath("//div[@id='product_13']/div[1]/div[1]/a[1]/@href");
  var $corr4= htmlExtract.getAttrByXPath("//div[@id='main-nav-bar']/ul/li[1]/noscript/a[1]/@href");
var resp = get($corr1+'/cart_link');
  var $corr5= resp.getHeader('ETag');
var resp = get($corr1+$corr2);
  var $corr6= resp.getHeader('ETag');
var page = open($corr1+$corr3);
  var htmlResp= page.resp;
  var htmlExtract = extractHTML(htmlResp);
  var $corr7= htmlExtract.getAttrByXPath('//html/head/meta[7]/@content');
get($corr1+$corr2);
get($corr1+'/cart_link');
var form = formData();
  form.put('utf8','✓');
  form.put('authenticity_token',$corr7);
  form.put('variant_id','13');
  form.put('quantity','1');
  form.put('button','');
post($corr1+'/orders/populate', form);
var page = open($corr1+'/cart?variant_id=13&');
  var htmlResp= page.resp;
  var htmlExtract = extractHTML(htmlResp);
  var $corr8= htmlExtract.getAttrByXPath('//html/head/meta[7]/@content');
  var $corr9= htmlExtract.getAttrByXPath("//div[@id='content']/div[1]/div[1]/form/div[1]/div[1]/table/tbody/input[1][@id='order_line_items_attributes_0_id']/@value");
  var $corr10= htmlExtract.getAttrByXPath("//div[@id='content']/div[1]/div[1]/form/div[1]/div[1]/table/tbody/input[2][@id='order_line_items_attributes_1_id']/@value");
get($corr1+'/cart_link');
get($corr1+$corr2);
var form = formData();
  form.put('utf8','✓');
  form.put('_method','patch');
  form.put('authenticity_token',$corr8);
  form.put('order[line_items_attributes][0][quantity]','1');
  form.put('order[line_items_attributes][0][id]',$corr9);
  form.put('order[line_items_attributes][1][quantity]','1');
  form.put('order[line_items_attributes][1][id]',$corr10);
  form.put('checkout','');
  form.put('order[coupon_code]','');
//post($corr1+$corr4, form);
var page = open($corr1+'/checkout/address');
  var htmlResp= page.resp;
  var htmlExtract = extractHTML(htmlResp);
  var $corr11= htmlExtract.getAttrByXPath('//html/head/meta[7]/@content');
  var $corr12= htmlExtract.getAttrByXPath("//div[@id='checkout']/div[2]/div[1]/form/div[1]/div[1]/div[1]/input[1][@id='order_email']/@value");
  var $corr13= htmlExtract.getAttrByXPath("//div[@id='billing']/div[2]/div[1]/p/input[1][@id='order_bill_address_attributes_firstname']/@value");
  var $corr14= htmlExtract.getAttrByXPath("//div[@id='billing']/div[2]/div[1]/p/input[1][@id='order_bill_address_attributes_lastname']/@value");
  var $corr15= htmlExtract.getAttrByXPath("//div[@id='billing']/div[2]/div[1]/p/input[1][@id='order_bill_address_attributes_address1']/@value");
  var $corr16= htmlExtract.getAttrByXPath("//div[@id='billing']/div[2]/div[1]/p/input[1][@id='order_bill_address_attributes_city']/@value");
  var $corr17= htmlExtract.getAttrByXPath("//div[@id='billing']/div[2]/div[1]/p/input[1][@id='order_bill_address_attributes_zipcode']/@value");
  var $corr18= htmlExtract.getAttrByXPath("//div[@id='billing']/div[2]/div[1]/p/input[1][@id='order_bill_address_attributes_phone']/@value");
  var $corr19= htmlExtract.getAttrByXPath("//div[@id='billing']/input[1][@id='order_bill_address_attributes_id']/@value");
  var $corr20= htmlExtract.getAttrByXPath("//div[@id='shipping']/input[1][@id='order_ship_address_attributes_id']/@value");
  var $corr21= htmlExtract.getAttrByXPath("//div[@id='checkout']/div[2]/div[1]/form/div[3]/input[1]/@value");
get($corr1+'/cart_link');
var resp = get($corr1+'/api/v1/states?country_id=232&');
  var jsonExtract = JSON.parse(resp.getDataString());
  var $corr22= jsonExtract.states[13].id;
get($corr1+$corr2);
var form = formData();
  form.put('utf8','✓');
  form.put('_method','patch');
  form.put('authenticity_token',$corr11);
  form.put('order[email]',$corr12);
  form.put('order[state_lock_version]','4');
  form.put('order[bill_address_attributes][firstname]',$corr13);
  form.put('order[bill_address_attributes][lastname]',$corr14);
  form.put('order[bill_address_attributes][address1]',$corr15);
  form.put('order[bill_address_attributes][address2]','');
  form.put('order[bill_address_attributes][city]',$corr16);
  form.put('order[bill_address_attributes][country_id]','232');
  form.put('order[bill_address_attributes][state_id]',$corr22);
  form.put('order[bill_address_attributes][zipcode]',$corr17);
  form.put('order[bill_address_attributes][phone]',$corr18);
  form.put('order[bill_address_attributes][id]',$corr19);
  form.put('order[use_billing]','1');
  form.put('order[ship_address_attributes][id]',$corr20);
  form.put('commit',$corr21);
//post($corr1+'/checkout/update/address', form);
open($corr1+'/checkout/delivery');
get($corr1+'/cart_link');
get($corr1+$corr2);
