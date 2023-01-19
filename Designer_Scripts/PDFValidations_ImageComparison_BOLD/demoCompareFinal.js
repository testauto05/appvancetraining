log("test test")
var source = readImage("{mds}/ToCompare.png");
var target = readImage("{mds}/file.png");
var entry = findImgCoords(source, target);
log(JSON.stringify(entry));
var source = readImage("{mds}/ToCompare1.png");
var target = readImage("{mds}/file1.png");
var entry = findImgCoords(source, target);
log(JSON.stringify(entry));
var source = readImage("{mds}/ToCompare2.png");
var target = readImage("{mds}/file2.png");
var entry = findImgCoords(source, target);
log(JSON.stringify(entry));