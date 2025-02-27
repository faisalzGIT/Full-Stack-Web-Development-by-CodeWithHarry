let a = [2,4,9,3,7]
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     a_new_array.push(element**2);
// }

// console.log(a_new_array)

let n_array = a.map(e=>{
    return e**2;
})

console.log(n_array )


const aar2 = [1,2,3,4,5]
                
const red = (a,b) => {
    return a+b //we can do all arithmetic oprations
}

console.log(aar2.reduce(red));


// console.log(Array.from("FAISAL"))                                           

