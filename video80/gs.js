//get and set
console.log('new');

class User{
	constructor(name){
		//inveokes setter
		this.name = name;
	}

	get name() {
		return this._name;
	}
	
	set name(value) {
		if(value.length < 4){
			console.log("name is too short");
			return 0;
		}
		this._name = value;
	}
}

let user = new User("jon");
console.log(user);

console.log(user.name);	

user = new User("ret4")
console.log(user.name);	