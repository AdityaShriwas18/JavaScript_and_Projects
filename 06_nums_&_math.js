// // +++++++++++++++++++++++ Number +++++++++++++++++++++
// const balance = 10000.3243;

// const newBalance = new Number(20000);
// console.log(newBalance);

// console.log(newBalance.toString());
// console.log(newBalance.toString().length);

// console.log(balance.toFixed(2));

// console.log(balance.toPrecision(5));

// let salary = 1000000;
// console.log(salary.toLocaleString());
// console.log(salary.toLocaleString('en-IN'));

// // ++++++++++++++++++++++++++++ Number +++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // changes negative to positive

// //round function rounds of the value
// console.log(Math.round(5.4));
// console.log(Math.round(5.6));

// // gives the ceiling value
// console.log(Math.ceil(5.1));

// //gives the Floor value
// console.log(Math.floor(4.9));

// gives a random value between 0 to 1
// console.log(Math.random());
// console.log((Math.random() * 10) + 1);
// console.log(Math.floor((Math.random() * 10) + 1));

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min));
