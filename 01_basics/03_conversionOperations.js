// Conversion and Operations
let score = "33"
// console.log(typeof score)

let valInNumber = Number(score)
// console.log(typeof valInNumber)

// "33" => 33
// "33abc" => NaN(Not a Number)
// true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)
// "" => false
// "anything" => true

// OPERATIONS
// console.log(2+2);
// console.log(2-2);
// console.log(2/2);
// console.log(2*2);
// console.log(2**3);
// console.log(2%3);

// let str1 = "Hello"
// let str2 = " Daksh"
// console.log(str1 + str2);

// console.log("1" + 2) //12
// console.log(1 + "2") //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

// Prefix ++i return the value after the increment
i = 1
j = ++i
console.log("Prefix => ",{ i, j }); 

// Postfix i++ return the value before the increment
a = 1
b = a++
console.log("Postfix => ",{ a, b});