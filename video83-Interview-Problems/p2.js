// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.



function doubleTrouble(arr){

	return arr.map((num, index, array) => {
		if(index > 0 && num === array[index - 1]){
			return num;
		}
		return num*2;
	});
}

const numbers = [1,2,2,3,4,4,4,5];
const result = doubleTrouble(numbers);


console.log(result);
