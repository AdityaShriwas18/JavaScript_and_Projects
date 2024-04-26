const name = "Aditya Shriwas";
const age = 19;

//another way to declare a string is
const Myname = new String("Aman Rai");
console.log(Myname);


// console.log(name + age);

// this way writing a string is called String Interpolation
console.log(`My name is ${name} and my age is ${age}`);

// Strings are Immutable
// String are object and it's value is stored as key value pair 
console.log(name[0]);

// some of String methods
console.log(name.length); // length function to get the length of string
console.log(name.toUpperCase()); // converts the string to uppercase
console.log(name.charAt(5));// gives the value at given index
console.log(name.indexOf('d'));// returns the index of given character
console.log(name.substring(0,5));// retruns the sub string of a string
console.log(name.slice(-8, 4));

const newString = "        aditya Shriwas ";
console.log(newString);
console.log(newString.trim());// removes the whitespaces from the string

let url = "WWW.AdityaShriwas.com/profile/aditya%20Shriwas";
console.log(url.replace('%20','_')); //replaces the string's specific portion with given arguments

console.log(url.includes('aditya')); // check if the given arguments is present in string or not returns boolean

console.log(name.split(' '));