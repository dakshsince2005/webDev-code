const sym = Symbol("key1")

const JsUser = {
    name: "Daksh",
    [sym]: "daksh saini", //This is the way to declare a symbole in an object first declare it outside thn in the object
    age: 19,
    location: "Jaipur",
    email: "daksh@google.com",
    isLoggedin: false,
    lastLoggedDay: ["Monday", "Tuesday"]
}
// To ways to access the elements of the object
console.log(JsUser.email);
console.log(JsUser["email"]);

console.log(typeof JsUser[sym]);

// freeze() method
// JsUser.email = "dakshsaini@google.com" //change the value 
// Object.freeze(JsUser) //No changes can be done now in the object 
// JsUser.email = "dakshsaini@microsoft.com" //trying to make changes after the freeze method
// console.log(JsUser); //so as you can see in the output the changes made after freeze method didn't apply

// Adding a function in an object
JsUser.greetings = function() {
    console.log("Welcome JS user");
}

JsUser.greetingsTwo = function() {
    console.log(`Welcome JS user ${JsUser.name}`);
}

console.log(JsUser.greetings);
console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());