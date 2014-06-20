// pyramid builder

pyramid = ["*", "**", "***", "****", "*****"];
text = "";
var i;
for (i = 0; i < pyramid.length; i++) {
    text += pyramid[i] + "<br>";
}

document.getElementById("star").innerHTML = text;
 
//even odd

for (var i = 1; i <= 4; i++) {
    if (i % 2 === 0) {
        document.write("<h" + i + ">" + "Even" + "</h" + i + ">");
    }
      else {   
        document.write("<h" + i + ">" + "Odd" + "</h" + i + ">");
      }
    }
