let a = prompt("Enter a:");
let b = prompt("Enter b:");

if(isNaN(a) || isNaN(b)){
	throw SyntaxError("The Input is Invalid");
}

const sum = parseInt(a) + parseInt(b);

try {
	console.log(sum * c);
	// setInterval(()=>{
	// 	console.log('newqq');
	// 	// console.log(sum * x);  
	// 	/*
	// 	- basically if we use setInterval or setTimeout in try-catch 
	// 	then if any error happen in setInterval or SetTimeout,
	// 	the catch will not catch that error
		
	// 	- Thats because the function itself executed later,
	// 	when the engine has already left the try..catch construct
	// 	*/
	// },1300)
} catch (error) {
	console.log("Bhaijaaaan ereeor agya");
	alert(error.name)
	alert(error.message)
	alert(error.stack)
	// console.log(error.stack);
	
}

