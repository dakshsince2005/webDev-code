// Function -> it is a reusable block of code that can be used anywhere in the entire code by maing a call for it. It also make the code look more cleaner.
// The basic syntax of writing function is:-

// 1. Function declaretion
function printHello() { 
    console.log("Hello");
}
// 2. Function call -> it can be done anywhere in the code and it call the the function and perform the task done in it.
// printHello(); // writing only functionName means reference of function and putting perenthesis functionName() means execution

function sumOfNumbers(num1, num2) { //the values passed here are called parameters they are the variables of the function 
    return num1 + num2;
}
// console.log(sumOfNumbers(6, 4)); //numbers passed in the function call are called arguments or the data that will go in the parameters

function userLoggedIn(username) {
    if(!username) {
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in`
}

// console.log(userLoggedIn("Daksh Saini"));

// Rest operator(...) -> Both rest and spread operator are same the difference comes in the use case the rest operetor wraps all the spread data into an array and returns is usually used when we don't know how many parameters we have to pass
function shoppingCart(...num) {
    return num;
}
// console.log(shoppingCart(200, 300, 500));


// Obejects in function
const user = {
    username: "Daksh",
    price: 199
}
function handleObejct(anyObject) {
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);
}
// handleObejct(user);
// handleObejct({username: "Daksh Saini", price: 299})


//Arrays in function
const myNewArray = [100, 200, 300, 400, 500];
function getMyArray(getArray) {
    return getArray[0];
} 
console.log(getMyArray(myNewArray));