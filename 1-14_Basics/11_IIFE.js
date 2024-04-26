// Immediately involked function expression (IIFE)

(function printSomething(){
    //named IIFE
    console.log("DB Connected");
})();

// To end the scope of first IIFE if is neccessary to use semicolon after the function execution
// IIFE with errow function

( (name)=> {
    console.log(`DB Connected to ${name}`);
})('Aditya');

// parameters can be passed in IIFE