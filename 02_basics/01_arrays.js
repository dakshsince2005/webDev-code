let arry = [1,2,3,4,5]
console.log(arry);
const arry2 = new Array(1,2,3,4,5)
console.log(arry2[1]);

// Array Method 
// arry2.push(6) //Push method adds value at the end of the array 
// arry2.push(7)
// arry2.pop() //Simply removes last value from the array

// arry2.unshift(0) //Adds value at the start of the array
// arry2.unshift(45)
// arry2.shift() //simply removes the first value from the array
// console.log(arry2);

// console.log(arry2.includes(9)); //Prints weather the asked value is present in the array or not
// console.log(arry2.indexOf(4)); //Tells the element the is present at that index position

// const newArry = arry2.join() //it will convert the array into string
// console.log(arry2);
// console.log(newArry);

// Slice and splice 
const myNewArray = [1,2,3,4,5]
myNewArray.splice(1, 2, 102, 103) //changes the original array from index 1 change 2 elements and make it 102 & 103
console.log(myNewArray);