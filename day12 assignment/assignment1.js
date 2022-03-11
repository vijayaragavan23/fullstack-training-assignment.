var fs = require("fs");
var quote = "im vijay"

// fs.readFile("temp.txt","utf-8",function(err,data){
//     if(err){ console.log("Error ", err)}
//     else{ console.log(data)};
    
// });
// console.log( fs.readFileSync("temp.txt","utf-8"));
fs.watchFile("temp.txt",function(){
    console.log("file changed");
});
setInterval(function(){
    fs.appendFileSync("temp.txt",`${quote} \n`,"utf-8");
},5000);