// if objects is created using literals it will not be singleton but if it's created using contructors it'll be singleton

// Object.create // created using constructor

// Object literals

const mySym = Symbol("key1")
const userData = {
    name: "Aditya",
    "Full Name": "Aditya Shriwas",
    [mySym]: "mySym1",
    age: 19,
    city: "Indore",
    email: "aditya123@gmail.com",
    isLoggedIn: false,
    LastLoggedInDays: ["Monday", "Tuesday"]
}

// ways to access objects
console.log(userData.name);

console.log(userData["age"]);

// console.log(userData."Full Name"); // can't be accessed like this

console.log(userData[mySym]);

userData.email = "aditya@microsoft.com";
console.log(userData.email);

// if using freeze objects, key values can't be change furthur  
// Object.freeze(userData);
// userData.email = "aditya@google.com";

userData.greeting = function(){
    console.log(`Hello! ${this.name}`);
}

console.log(userData.greeting());

const instaUser = {}

instaUser.id = "-_adityashriwas18";
instaUser.name = "Aditya Shriwas";
instaUser.isLoggedIn = false;

console.log(instaUser);

const regularUser = {
    email: "aman123@gmail.com",
    fullName:{
        userFullName:{
            firstname: "Aman",
            lastname: "Rai"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstname);

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e", 6: "f"}

const obj3 = {obj1, obj2}
console.log(obj3); // return nested objects 

const obj4 = Object.assign({}, obj1, obj2); // this is static method assigns all the objects into one objects and returns it
console.log(obj4);

const obj5 = {...obj1, ...obj2};
console.log(obj5);

const arrayObjects = [
     obj6 = {1: "a", 2: "b", 3: "c"},
     obj7 = {4: "d", 5: "e", 6: "f"}
]

console.log(arrayObjects[1]);

console.log(Object.keys(userData));
console.log(Object.values(userData));
console.log(Object.entries(userData));
console.log(userData.hasOwnProperty('isLoggedIn'));