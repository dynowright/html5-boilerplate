// pyramid builder

pyramid = ["*", "**", "***", "****", "*****"];
text = "";
var i;
for (i = 0; i < pyramid.length; i++) {
    text += pyramid[i] + "<br>";
}

document.getElementById("star").innerHTML = text;
 
