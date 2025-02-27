var a = 50;
var b = 6;
var c = "Harry";
var _a = "nreref";
// var 55a = 5; - is not allowed because number is there at 1st 

console.log(a + b)

console.log(typeof a, typeof b, typeof c, typeof _a);

const w2 = 7;  
// w2 = 5; - not allowed since u cannot change constant 

let bb = 1;
{
    let bb =5;
    console.log(bb)
}
console.log(bb)


let n = "harry bhai";
let m = 10;
let k = 16;
const p = true;
let q = undefined;
let r = null;

console.log(n, m, k, p, q, r)
console.log(typeof n, typeof m, typeof k, typeof p, typeof q, typeof r)

const o = {
    name: "Gentle man",
    "job code": "5600",
}

console.log(o);
o.salarry = "100crores";
console.log(o);


let obj = {
    name:"Mohammad Faisal",
    "ph number": "9843343545",
    marks: "99"
}

console.log(obj)

var str = "a"
console.log(str + 1);