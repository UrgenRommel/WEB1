var r = {};
var a = {'nb': 45};


function isEmpy(obj){
    for(var i in obj){
        return false;
    }
    return true;
}
console.log(isEmpy(r));
console.log(isEmpy(a));
