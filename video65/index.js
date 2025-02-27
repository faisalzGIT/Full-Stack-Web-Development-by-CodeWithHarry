/* Find factorial  
*/ 
// M1: reduce method
const arr = [1,2,3,4,5];

const factorial = (a,b) => {
    return a*b;
}

console.log(arr.reduce(factorial));

// M2:forloop method
var f = 1;
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    f = f * element;
}
console.log(f);

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
    
// }

console.log("Alhamdu lillah")