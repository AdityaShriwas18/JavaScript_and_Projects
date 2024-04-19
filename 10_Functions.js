// function definition
function myName(){
    console.log("Aditya Shriwas");
}

// myName -> function reference

// function call
// myName();

function addTwoNumbers(num1, num2){
    // console.log(num1+num2);
    return num1+num2
}
const Result = addTwoNumbers(10,20);
console.log(Result);

function loggedInUser(Username){
    if (!undefined) {
        console.log("Please enter a Username!");
        return;
    }
    return `${Username} Just logged In`
}
// if not entered any value it will return undefined 
console.log(loggedInUser()); 


function addCartToPrice(...num){
    return num
}

console.log(addCartToPrice(100, 200, 300, 400));

//pass object to function

const user = {
    username: "Aditya Shriwas",
    price: 25000
}
function showDetails(anyobject){
    console.log(`this is ${anyobject.username} and his cost is ${anyobject.price}`);
}
showDetails(user);

//another way

showDetails({
    username: "Aman Rai",
    price: 5000
})

//pass array to function

const array = [100, 200, 300, 400];

function returnSecondElem(array){
    return array[1];
}
console.log(returnSecondElem(array));

// another way

console.log(returnSecondElem([100, 200, 300, 400]));

// arrow functions and this keyword

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}


