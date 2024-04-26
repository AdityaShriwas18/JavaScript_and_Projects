array = [1,2,3,4,5];
console.log(array);

//Array Methods
array.push(6); // add elements at the end of the array
console.log(array);

array.pop(); // delete the elements from the end of the array
console.log(array);

array.unshift(0);
console.log(array);

array.shift();
console.log(array);

console.log(array.includes(6));
console.log(array.indexOf(3));

let newArray = array.join(); // converts the datatypes of array to string
console.log(newArray);
console.log(typeof newArray);

console.log("A", array);
//slice operation returns a portion of array but don't manipulate the original arrya
console.log(array.slice(0, 3));

//splice operation returns a portion of array but also manipulates the original arrya
console.log("B", array);
console.log(array.splice(0,3));
console.log("C",array);


let DSA = ["java", "c++", "python", "JS"];
let DEV = ["HTML", "CSS", "BOOTSTRAP"];

let languages = DSA.concat(DEV);
console.log(languages); // merge the Array and returns the new array

DSA.push(DEV); //changes the original Array
console.log(DSA);

let allLanguages = [...DSA, ...DEV];
console.log(allLanguages);

newArray = [1,2,3,4,5,[6,7,8],9,[10,11,12,[13,14,15]]];

//flat method converts all subarray into a single array returns a new array

updatedArray = newArray.flat(Infinity);
console.log(updatedArray);

console.log(Array.isArray("Aditya")); // returns true or false if given data is array or not

console.log(Array.from("Aditya")); // converts another datatype in array
console.log(Array.from({name:"Aditya"})); // imp and intresting case

let score1 = 100;
let score2 = 200;
let score3 = 300;

// .of converts the given data into a single array
console.log(Array.of(score1, score2, score3));
