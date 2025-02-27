/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/


let random = Math.random();

let a = prompt("Enter 1st number:");
let c = prompt("Enter Operation:");
let b = prompt("Enter 2st number:");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if(random>0.1){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    // alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else{
    // performs wrong calculation
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}