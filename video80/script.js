// let obj = {
// 	a:1,
// 	b:"harry"
// }

// console.log(obj);

// let animal = {
// 	eats:true
// };

// let rabbit = {
// 	jumps:true
// };

// rabbit.__proto__ = animal;//sets rabbit.[[Prototype]] = animal

 



class Animal{
	constructor(name){
		this.name = name;
		console.log('Ban gya object');
	}

	eats(){
		console.log('kha liya');
	}

	jumps(){
		console.log('kood liya');
	}
}

let a = new Animal("bunny");
console.log(a);

class lion extends Animal{
	constructor(name){
		super(name);
		console.log('Ban gya object... SHERA');
	}

	eats(){
		super.eats();
		console.log('khaliya roarrr');
	}
}

let l = new lion("Shera");
console.log(l);
