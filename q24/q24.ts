let string1 = 'Hello';
let string2 = 'World';
let number1 = 5;
let number2 = 10;
let array = ['apple', 'banana', 'orange'];

// Tests for equality and inequality with strings
console.log("Is string1 == string2? I predict False.");
console.log(string1 == string2);

console.log("Is string1 != string2? I predict True.");
console.log(string1 != string2);

// Tests using the lowercase function
console.log("Is string1 lowercase equal to 'hello'? I predict True.");
console.log(string1.toLowerCase() == 'hello');

console.log("Is string2 lowercase not equal to 'world'? I predict False.");
console.log(string2.toLowerCase() != 'world');

// Numerical tests
console.log("Is number1 > number2? I predict False.");
console.log(number1 > number2);

console.log("Is number1 < number2? I predict True.");
console.log(number1 < number2);

console.log("Is number1 >= number2? I predict False.");
console.log(number1 >= number2);

console.log("Is number1 <= number2? I predict True.");
console.log(number1 <= number2);

// Tests using "and" and "or" operators
console.log("Is number1 > 0 and number2 < 20? I predict True.");
console.log(number1 > 0 && number2 < 20);

console.log("Is number1 > 0 or number2 > 20? I predict True.");
console.log(number1 > 0 || number2 > 20);

// Test whether an item is in an array
console.log("Is 'banana' in the array? I predict True.");
console.log(array.includes('banana'));

console.log("Is 'grape' not in the array? I predict True.");
console.log(!array.includes('grape'));
