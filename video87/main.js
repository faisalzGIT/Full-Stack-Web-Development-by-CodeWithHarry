const fs = require('fs')

console.log('starting It');
fs.writeFileSync("harys.txt","The First file is ready")  // this creates files synchronously   //1
fs.writeFile("harys22.txt", "The Second File Has been Created", ()=>{ // this creates files asynchronously   //2
	console.log('The File created Asynchronously');
})

//to append text in file
fs.appendFile("harys.txt", " Hogya Paji Append Firse  ", (e, d)=>{   //3
	console.log(d);
})

console.log('Ending It');