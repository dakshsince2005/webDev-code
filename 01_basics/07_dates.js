// Dates ( Date is an object )
// Months in Date usually follow indexing which means months starts from 0. (few cases exceptional)

let myDate = new Date();
console.log(myDate.toString()); //converting string into string
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString()); //Prints only date MM/DD/YYYY
console.log(myDate.toLocaleString()); //Prints date plus time with comma seperation

let newDate = new Date(2023, 1, 25) //Here it is to print a specific date in format of (year, month, date) and the month starts from zero
let newDate2 = new Date("2023-01-25") //Different format of writting the same thing above
let newDate3 = new Date("01-14-2023")
console.log(newDate.toLocaleString());
console.log(newDate2.toLocaleString());
console.log(newDate3.toLocaleString());

let timeStamp = Date.now()
console.log(timeStamp.toLocaleString());

// In localeString you can customize how you want your data and time output
newDate.toLocaleString('default', { 
    //press control space to see all the features 
    weekday: "long" //will make wed => wednesday
})