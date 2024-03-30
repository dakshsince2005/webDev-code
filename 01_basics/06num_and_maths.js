const score = 400
console.log(score);

const balance = new Number(400)
console.log(balance);

console.log(balance.toString().length); //This will convert the number into string and than you can also use string function after that

console.log(balance.toFixed(2)); //Places a decimal after the number and puts zeroes according to the number you entered in the function

const newBalance = 123.8934
console.log(newBalance.toPrecision(3)); //Gives a precise number from range of 1-21 basically it rounds off the number depending upon the number of digits you want to round off

const value = 1000000
console.log(value.toLocaleString('en-IN')); //Puts comma in between numbers(US standards by default but can be changed en-IN is Indian) 

// MATHS
console.log(Math.abs(-4)); //converts negetive number into positive
console.log(Math.round(23.5)); //rounds off to the nearest integer
console.log(Math.ceil(4.2)); //Chooses the top value to round off
console.log(Math.floor(4.9)); //Chooses the lowest value to round off
console.log(Math.random()); //Generates a random value between 0 and 1

console.log(Math.random * 10); //Shifts the number to the right side of the decimal 
console.log((Math.random() * 10) + 1); //Shifts the number and +1 makes sure that the number doesn't come 0
console.log(Math.floor((Math.random() * 10) + 1)); //Rounds off the number to a integer
// Using the above Method we can make a code to generate number between two numbers
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);