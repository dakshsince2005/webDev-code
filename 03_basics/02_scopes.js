/*
Why we should not use var in the code:-
So in the the code below the variables cannot be accessed outside of the scope execpt var cuz the concept of scope does not apply on var
if (true) {
    var a = 200;
    let b = 300;
    const c = 400;
}
console.log(a);
console.log(b);
console.log(c);
*/

// Any and everything outside curly bracets have GLOBLE SCOPE and inside have BLOCK SCOPE

// Scope in nested function -> The child function or inner function can access the variable of parent function but parent function can't access child function's variable
function one() {
    const username = "Daksh";
    function two() {
        const website = "Youtube";
        console.log(username);
    }
    // console.log(website);
    two();
}
one();