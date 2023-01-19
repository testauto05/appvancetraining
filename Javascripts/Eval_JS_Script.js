navigateTo("https://demosite.appvance.com/");
setValue(searchbox("form-control"),eval('\"Appvance_Bags'+ Math.floor(Math.random()*1000)+'\"'));
click(submit("Search"));
