class Person{
	constructor(naam, age){
		this.asliNaam = naam;
		this.umr = age;
	}

	set umr(asli_umar){
		if(asli_umar < 0){
			console.log('Are bhai sachchi sachi bolo');
			return;
		}
		this.final_umar = asli_umar;
		return;
	}

}

let person1 = new Person("Mohammad Faisal", -10); //logs 'Are bhai sachchi sachi bolo'

person1.age = 20;
console.log(person1.age);

person1.age = -1;
console.log(person1.age);