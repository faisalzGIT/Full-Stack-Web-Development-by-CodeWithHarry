// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

function magicalSortingHat(students){
	return students.map((ekStudent)=>{
		const nameLength = ekStudent.length;

		if(nameLength<6){
			return { name:ekStudent, house:"Gryffindor"};
		} else if(nameLength<8){
			return { name:ekStudent, house:"Hufflepuff"};
		} else  if(nameLength<12){
			return { name:ekStudent, house:"Ravenclaw"};
		} else {
			return { name:ekStudent, house:"Slytherin"};
		}
	});
}

const students = ["Harry", "Hermione", "Ron", "Draco", "Luna", "Neville"];
const sortedStudents = magicalSortingHat(students);

console.log(sortedStudents);
