addNetworkLibrary("{ds}/PDFTest.netx");
prepareDomain("https://www.w3.org");
navigateTo("https://www.w3.org/WAI/WCAG20/glance/WCAG2-at-a-Glance-a4.pdf");
//click(link("WCAG 2 at a Glance (PDF) A4"));
wait(5000);
log($pdfData);
assertContains($pdfData,"Perceivable");

