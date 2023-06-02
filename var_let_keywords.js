//var and let keywords are used to initialize variables
//declaring a variable with var makess it global or local if it was declared within a function
//declaring using let however limits the variable scope to the block or expression it was declared in
//Another difference is that, for var, you can initialize two variable with the same name but an error is raised when using let for the same
//The below functions show the difference between the two, try and run them
function checkScope() {
"use strict";//this enables strict mode which catches coding mistakes and unsafe actions e.g. creation of a variable without declaration
    var i = "function scope";
    if (true) {
        i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

checkScope();

//
function checkScopeTwo() {
"use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

checkScopeTwo();

//The outputs of these function differs because of how the variables are intialized



