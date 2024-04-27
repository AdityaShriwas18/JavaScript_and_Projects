const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task is completed");
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("second async task completed");
        resolve();
    },2000)
}).then(function(){
    console.log("Promise 2 Consumed");
})

const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Aditya", emain: "aditya@gmail.com"});
    },1000)
})

PromiseThree.then(function(user){
    console.log(user);
})

const PromiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Aditya" });
    } else {
      reject("ERROR: something went wrong");
    }
  }, 1000);
});

PromiseFour.then((user) => {
  console.log(user);
  return user.username;
})
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
.finally(()=> console.log('Promise either resolved or rejected'));

fetch('https://api.github.com/users/AdityaShriwas18')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})
.catch((err)=> console.log(err));

// using async await


const PromiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive(){
    try {
        const response =  await PromiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json() 
        console.log(data);
    } catch (error) {
        console.log(err);
    }
}

getAllUsers();