var time =  23424335;
var ost  = time % 3600;

var hours = Math.floor( time / 3600);
console.log (hours + " часы");
var m = Math.floor(ost / 60);
console.log(m + " минуты");
var s = ost % 60;
console.log(s + " секунды");


var stroka = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at";

var l = [];
for (i=0; i < stroka.length; i++){
    if (stroka.charAt(i) == "a"){
        l.push(i);
    }
}

console.log (l);