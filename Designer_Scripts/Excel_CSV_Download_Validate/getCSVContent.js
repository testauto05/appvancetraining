
function getCSVContent(fileName) {
  var f = new java.io.File(fileName);
  log(f.exists());
  var localpath = f.getAbsolutePath();
  var fis = null;
  try {
    fis = new java.io.FileInputStream(localpath);
    var parser = new com.Ostermiller.util.ExcelCSVParser(fis);
    return parser.getAllValues();
  } catch (e) {
    throw e;
  } finally {
    if (fis != null) {
      fis.close();
    }
  }
}

function getExcelContent(fileName) {
  
  var f = new java.io.File(fileName);
  log(f.exists());
  var localpath = f.getAbsolutePath();
  
  var oExcel = new com.appvance.enterprise.executer.EXCELContentExtractor();
  var data = oExcel.getContent(localpath, "array");
  return data;
}

//log(getCSVContent("C:\\test\\AIQ-5773\\Registrationpage.csv")[0][0]);

//var data = getExcelContent("C:\\test\\AIQ-5773\\Clinic Reports.xlsx");
//log(data);
//log(data[0]);
//log(data[0][0]);
