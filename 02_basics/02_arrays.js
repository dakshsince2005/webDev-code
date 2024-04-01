const marvel = ["Thor", "Ironman", "Captain america"]
const dc = ["Superman", "Batman", "Wonder Woman"]
// This example proves that array takes all sorts of data even another array as an element 
// marvel.push(dc) //In this case the element on 3rd index will be an whole array
// console.log(marvel);
// console.log(marvel[3]);

// concat() combines two or more arrays into one new array
const newHeros = marvel.concat(dc)
console.log(newHeros);

// Another way of doing the same task as above is spread(...)
const all_new_heroes = [...marvel, ...dc] // ... means that the elements of both of the elements are now individual entities in a new array
console.log(all_new_heroes);

const another_array = [1,2,3,4,[5,6],7,[8,[9,10]]]
const real_another_array = another_array.flat(Infinity) //it makes this type of arrays into an single array and infinity means it will merge all arrays present in that array
console.log(real_another_array);

console.log(Array.isArray("Daksh")); //checks weather the data it has is an array
console.log(Array.from("Daksh")); //converts the data into array
console.log(Array.from({name: "daksh"})); //interesting case
let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1, s2, s3)); //Makes all the three datas into one single array