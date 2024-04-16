"use strict"; // treat all js code as newer verison

// alert("hello"); //can't use alert in nodejs

let name = "Aditya"; // string 
let age = 19;        // number
let isLoggedIn = true; // boolean => true/false
let bignumber = 498237498237587238478n // bigInt 
console.log(typeof bignumber);

//primitive data types
// string 
// number => range is 2^53
// boolean
// bigInt
// null => standalone value
// symbol => unique

console.log(typeof null); // object
console.log(typeof undefined); //undefined

// non primitive data types
// object
// arrays

const Id = Symbol('123');
const anotherId = Symbol('123');
console.log(Id == anotherId);

let friends = ["Aditya", "Aman", "Himanshu", "Kishan"];
console.table(friends);
console.log(typeof friends);


let data = {
    name: "Aditya Shriwas",
    age: 19,
    city: "Indore",
    isAdult: true
}

console.table(data);
console.log(typeof data);

let func = function MyFunction() {
    console.log("Namaste Duniya");
}
console.log(typeof func);