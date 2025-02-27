let a=7;
// M1
function factorial(number){
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1));
    let c = arr.slice(1).reduce((a,b)=> a*b);
    console.log("factorial is ",c," by creating an array")
}

factorial(a)

// M2
function facto(number){
    let f = 1;
    for (let i = 1; i <=number; i++) {
        f = f*i;
    }
    console.log("factorial is ",f," by for looping");       
}

facto(a)