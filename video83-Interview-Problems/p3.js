
// 3. The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.
let str1 = "array";
let str2 = str1.split('');

str2 = str2.reverse();
str2 = str2.join("");

str1 = str1 + str2

console.log(str1);
