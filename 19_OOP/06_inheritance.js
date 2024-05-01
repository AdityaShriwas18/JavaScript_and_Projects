class User {
    constructor(username){
        this.username = username;
    }

    signMe(username){
        console.log(`User name is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`The new course was added by ${this.username}`);
    }
}

const user1 = new Teacher("Aditya Shriwas", "aditya@gamil.com", "362746");

console.log(user1);
user1.addCourse();

console.log(user1 === User);
console.log(user1 instanceof Teacher);