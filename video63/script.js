let arr = [1,3,5,4,2]
// index no. 0, 1, 2, 3, 4
 
arr[0] = 2121;

arr = [1,3,5,4,2]//RE-INITIALIZED

console.log(arr)
console.log(arr.length)

console.log(arr[0])
console.log(arr[2])
console.log(arr[3]) 

console.log(arr.toString(), "                <-toString")

console.log(arr.join(" and "), "       <-join")

console.log(arr.pop(), "         <-pop")// this displays last element which is removed
console.log(arr) // the remaining array

console.log(arr.push(9), "         <-push")
console.log(arr)

console.log(arr.shift(), "         <-shift")
console.log(arr)// first element removed


console.log(arr.unshift("2"), "         <-UNshift")
console.log(arr)// first element added

delete arr[4]
console.log(arr, "         <-- After deletion")// first element added


let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [9,8,7]
console.log(a1.concat(a2,a3), "         <-- combining arrays using concat the OG arrays dont change")

console.log(a3.sort(), "         <-- sort()")


let sp = [10,20,30,40,50];
console.log(sp, "         <-- Before splice")

console.log(sp.splice(1,3), "         <--- Using splice \"this shows removed elements\"")

console.log(sp, "         <-- After splice")

console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

console.log("         //replacing elemnts using splice")
let dp = [10,20,30,40,50];
console.log(dp, "         <-- Before splice")

console.log(dp.splice(1,3,23,45,54), "         <--- Using splice \"this shows removed elements\"")

console.log(dp, "         <-- After splice")

console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

console.log("         //replacing elemnts using splice")
let fp = [10,20,30,40,50];
console.log(fp, "         <-- Before splice")

console.log(fp.splice(2,1,58,56), "         <--- Using splice \"this shows removed elements\"")

console.log(fp, "         <-- After splice")

// console.log("")

console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
console.log("         //slice method")

const munk = [1,2,3,4,5,6]

console.log(munk)

console.log(munk.slice(2)) 
console.log(munk.slice(1,3)) 

console.log(munk)


console.log(munk)

console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
console.log("         //reverse() Method")

console.log(munk)
console.log(munk.reverse())