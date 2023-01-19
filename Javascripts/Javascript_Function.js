var $storedVars = new Array()
function Demo()
{
  var $button=_isVisible(byId("add-to-cart-button"));
    log ($button);
  if ($button == true)
  {
    click(byId("add-to-cart-button"));
  }
    else
      {
        click(span("Cart"));
      }
      
  }
navigateTo("https://demosite.appvance.com/");
click(link("Bags"));
click(link("Mugs"));
click(link("Ruby"));
click(link("Apache"));
click(span("Apache Baseball Jersey"));
Demo();
click(submit("Update"));
click(submit("Checkout"));
click(submit("Search"));
