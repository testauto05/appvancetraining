setDescription("Navigate to Demo Site");
navigateTo("https://demosite.appvance.com/");
setDescription("Spree Image exists");
assertExists(image("Spree 50"));
setDescription("Assert Contains Text");
assertContainsText("Shop by Categories",heading4("Shop by Categories"));
setDescription("Assert does not contain text");
assertDoesNotContainText("Appvance",heading4("Shop by Categories"));
setDescription("Storing the content into a variable");
var Equal_Check=getText(heading4("Shop by Categories"));
setDescription("Assert Equal");
assertEqual(Equal_Check,"Shop by Categories");
setDescription("AssertNot Null");
assertNotNull(Equal_Check);
setDescription("Store in variable");
var True_Check=isVisible(heading4("Shop by Categories"));
setDescription("AssertTrue check");
assertTrue(True_Check);
setDescription("Store in variable");
var False_Check=isVisible(heading4("Appvance"));
setDescription("AssertFalse Check");
assertFalse(False_Check);
setDescription("Get text and store in variable");
var Greater_Check=getText(link("1"));
setDescription("Assert Greater or Equal");
assertGreaterOrEqual(Greater_Check,1);
setDescription("Assert Greater than");
assertGreaterThan(Greater_Check,0);
setDescription("Assert Range");
assertRange(5,1,6);
setDescription("Assert Less than");
assertLessThan(Greater_Check,5);
