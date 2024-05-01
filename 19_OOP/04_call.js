function setUsername(username){
    this.username = username;
}

function createUser(username, email, password){
    // calling this calls the method par dosen't hold it's values because the execution context of the mehtod get outside the call stack 
    // setUsername(username);

    // for this use problem "call" and "this"can be used
    setUsername.call(this, username); 
    this.email = email;
    this.password = password;
}

const user = new createUser("Aditya Shriwas", "aditya@fb.com", 123456);

console.log(user);