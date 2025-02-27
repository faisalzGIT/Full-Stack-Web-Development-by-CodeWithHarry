// 4. The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.


let password = "Ab123456";
let abc = "abcdefghijklmnopqrstuvwxyz";
let ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let digt = "0123456789";

if (password.length >= 8) {
    let hasUppercase = password.split('').some(char => ABC.includes(char));
    let hasLowercase = password.split('').some(char => abc.includes(char));
    let hasDigit = password.split('').some(char => digt.includes(char));

    if (hasUppercase && hasLowercase && hasDigit) {
        console.log('Password is good');
    } else {
        console.log('Password must include at least one uppercase letter, one lowercase letter, and one digit.');
    }
} else {
    console.log('Password is too short!!!');
}
