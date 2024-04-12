// const tinderUser = {} // non-singleton object
const tinderUser = new Object() //it is a way of declaring a object ( it is a singleton object )
tinderUser.id = "abc123";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

// Object in an object
const regularUser = {
    email: "sammy123@google.com",
    userFullName: {         //it is completly correct to access/declare an object inside an object 
        firstName: "Daksh",
        lastName: "Saini"
    }
}
// console.log(regularUser);

// Merging of two objects
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
// const obj3 = Object.assign(obj1, obj2); //this methods merges two or more objects together
const obj3 = {...obj1, ...obj2} //You can do the same task by spread operator(...)
console.log(obj3);

// access keys or values of the object
console.log(Object.keys(tinderUser)); //print keys
console.log(Object.values(tinderUser)); //print values

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //.hasOwnProperty tells weather that property or key exist or not