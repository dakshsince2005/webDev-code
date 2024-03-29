let str1 = "Daksh"
let str2 = " Saini"
// let con = str1.concat(str2)
// console.log(con);

// BackTicks(`my name is ${var}`)
// console.log(`My name is ${str1.concat(str2)}`)

const gameName = new String('Daksh');
console.log(gameName.indexOf('a')); //This function tells the index of the element you entered
console.log(gameName[3]); //To access the element on the respective index you entered 
console.log(gameName.length); //To print the length of the string and it's a method not a function
console.log(gameName.toUpperCase()); //Prints all elements in upper case
console.log(gameName.toLowerCase()); //Prints all elements in lower case
console.log(gameName.charAt(3)); //Prints the character of the index number you've entered
console.log(gameName.substring(0, 3)); //Prints the string from the index number you entered first till the end index-1 (start till end-1)
console.log(gameName.slice(-5, 2)); //similar to slicing but we can pass negetive index which will print from the end 
// .trim() function removes all the empty spaces from the sides of the string
// you can use trimstart and trimend functions as well to remove spaces from a paricular side 

const url = "https://google.com/daksh%20saini"
console.log(url.replace("%20", "-")); //replace function repalces/changes a certain character or element from the string 
console.log(url.includes('daksh')); //tells weather the value entered exists in the string or not (if yes returns ture else false)

const words = "daksh-saini-from-jaipur"
console.log(words.split("-")); //splits the string of the basis of the seperator in this case which is "-"

// Points to be noted
// Use back ticks instead of "+" (console.log(`my name is ${var1}`)) like this
// And there are more string functions and methods you can explore them on mdn documentations