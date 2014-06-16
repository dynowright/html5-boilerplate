// pyramid builder

pyramid = ["*", "**", "***", "****", "*****"];
text = "";
var i;
for (i = 0; i < pyramid.length; i++) {
    text += pyramid[i] + "<br>";
}

document.getElementById("star").innerHTML = text;
 
//even odd

var hs = ["ODD", "EVEN", "ODD", "EVEN"];
text = "";

var i;
for (i = 0; i < hs.length; i++) {
    text += hs[i] + "<br>";
  
  if (hs[i] % 2 === 0){
  // I got stuck here!     
    

    
  }
}

document.getElementById("even_or_odd").innerHTML = text;
