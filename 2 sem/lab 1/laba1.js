var time =  234245645335;
var hours = time / 3600;
hours
var ost  = time % 3600;
ost


var stroka = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at";

var l = [];
for (i=0; i < stroka.length; i++){
    if (stroka.charAt(i) == "a"){
        l.push(i);
    }
}

console.log (l);