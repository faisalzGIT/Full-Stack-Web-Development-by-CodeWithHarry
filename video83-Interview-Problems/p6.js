// 6. The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.
function countVowels(arr){
	const vowels = "aeiouAEIOU";
	let count = 0;

	for( let i = 0; i < arr.length; i++){
		if(vowels.includes(arr[i])){
			count++;
		}
	}
	return count;
}
let chars = "Hello city";
console.log(countVowels(chars));
