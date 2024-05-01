const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);

const user = {
  username: "Aditya Shriwas",
  age: 19,
  isLoggedIn: true,
  User: function(){
    console.log("User nhi bana");
}
};

console.log(Object.getOwnPropertyDescriptor(user, "username"));

Object.defineProperty(user, "username", {
//   writable: false,
// gives the access that an object could be iterate or not
  enumerable: true,
});

// console.log(Object.getOwnPropertyDescriptor(user, "username"));

for (let [key, value] of Object.entries(user)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}