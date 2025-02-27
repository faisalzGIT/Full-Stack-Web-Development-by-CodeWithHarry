class Person {
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}

	get fullName(){
		return `${this.firstName} ${this.lastName}`
	}
}


let person1 = new Person("Mohammad", "Faisal");

let puraNaam = person1.fullName;
console.log(puraNaam);
