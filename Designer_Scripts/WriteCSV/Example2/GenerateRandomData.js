 var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
 var charactersLength = characters.length;
function makedata(result,length) {
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }   
   console.log(result);
   return result;
}

function make4random(result){
    for ( var i = 0; i < 4; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   result += '-';
   return result;
   console.log(result);
}

function generatemessageid(){
    var res = '';
    res = makedata(res,8);
	res += '-';
	for(i=0;i<3;i++){
	  res = make4random(res);
	}
    res = makedata(res,12);
	return res;
}