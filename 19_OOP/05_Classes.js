// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(password){
//         return ` ${this.password}6372ruidhf7834yi`;
//     }

//     changedUserName(username){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user = new User("Aditya Shriwas", "Aditya@fb.com", 123);

// console.log(user.encryptPassword());
// console.log(user.changedUserName());


// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const user2 = new User("aman", "aman@gmail.com", "123")

console.log(user2.encryptPassword());
console.log(user2.changeUsername());