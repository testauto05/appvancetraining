function randomFormat() {
var alphaChars=['a','b','c','d','e','f','g','h','i','j','k','l','m','n'];
var a1=alphaChars[Math.floor(Math.random() * alphaChars.length)];
var a2=alphaChars[Math.floor(Math.random() * alphaChars.length)];
var a3=alphaChars[Math.floor(Math.random() * alphaChars.length)];
var a4=alphaChars[Math.floor(Math.random() * alphaChars.length)];
log(a1);
var res=Math.floor(Math.random() * 10) + a1 + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + a2 +Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + a3 + a4 + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
log(res);
return res;  
}
