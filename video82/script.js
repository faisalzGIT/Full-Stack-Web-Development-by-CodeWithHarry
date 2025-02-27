console.log(a1);



//IIFE:
async function sleep() {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			console.log('timeUP');
			resolve();
		},2000);
		
	})
}

(async function(){ //this is IIFE (Immediately invoked function expression)
	let a = await sleep();
})();	


//destructuring:
//e.g:1
let [c,g] = [4,2]; 
console.log(c,g);

//e.g:2
let [d,f,...resdr] = [21,43,32,34,4];
console.log(d,f,resdr);
		
//e.g:3
let obj = {
	a:1,
	b:2,
	c:3
}

let {a,b} = obj;
console.log(obj);
console.log(b);
console.log(a);


//spread syntax:
function sum(a,b,c){
	return a+b+c;
}

//e.g in Arrays
let arr = [1,2,3];
let arr2 = [...arr,4,5];
console.log(arr2);

console.log(arr[0]+arr[1]+arr[2]);
console.log(sum(arr[0],arr[1],arr[2]));
console.log(sum(...arr)); // this ... will open arr and add the numbers 

//e.g in objects
let brr = [1,20,30];
let objk = {...brr};
console.log(objk);


let r = "the", k = "no";
let rk = {r,k};
console.log(rk);
 


// local, global and block scope


//hoisting
// e.g. 1:
var a1 = 5;

// e.g. 2:
hello("PAJJi");
function hello(naam){
	console.log("hello"+ " " + naam);
}