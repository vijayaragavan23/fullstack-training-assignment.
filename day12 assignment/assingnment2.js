const { EventEmitter } = require("stream");

let myevent = new EventEmitter();

myevent.on("ischoolevent", function(){
    console.log("ischoolevent happened")
});

let i = 0;
let interval = setInterval(function(){
console.log("ischoolevent");
 i++;
 if(i === 5){
     clearInterval(interval);
 }
},2000);

