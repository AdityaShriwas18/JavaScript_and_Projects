// Dates in JavaScript

let date = new Date();

// type of date is object
console.log(typeof date);

// related methods to converet the time given by Date()
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleTimeString());
console.log(date.toTimeString());
console.log(date.getTimezoneOffset());
console.log(date.toUTCString());

// created date

let myDate = new Date(2024, 3, 17);
console.log(myDate.toString());

let newDate = new Date(2024, 3, 17, 8, 54)
console.log(newDate.toLocaleString());

// TimeStamp
let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myDate.getTime());
console.log(Math.floor(myTimeStamp/1000));

let todayDate = new Date;
console.log(todayDate);
console.log(todayDate.getMonth()+1);
console.log(todayDate.getDay()+1);

todayDate.toLocaleString('default',{
    weekday:"long"
})
