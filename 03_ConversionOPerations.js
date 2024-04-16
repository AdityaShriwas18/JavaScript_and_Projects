 let age = 33;
// console.log(typeof age);

 age = "33";
// console.log(typeof age);

 age = "33";
 let convertedType = Number(age);
// console.log(typeof convertedType);

// age = "33abc";
// convertedType = Number(age);
// console.log(typeof convertedType);
// console.log(convertedType);

// "33" => 33
// "33abc" => NaN
// true => 1, false =>0
// 1 => true; 0 => false;
// ""(for empty string) => false;
// "Aditya" => true;

let isloggedIn = 1;
let convertToBool = Boolean(isloggedIn);
//console.log(convertToBool);

let isName = "";
let convertedBool = Boolean(isName);
//console.log(convertedBool);

let Age = 19;
let convertedString = String(Age);
//console.log(convertedString);
//console.log(typeof convertedString);


// operations


// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

console.log(+true); // output => 1
console.log(+""); // output => 0
// console.log(true+); // not valid