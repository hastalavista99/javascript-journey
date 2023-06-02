//const is also used to declared variables and has all the features of let
//variables declared with const are read only and cannot be reassinged after the fact

function funcConst(str) {
    "use strict";

    const SENTENCE = str + " is cool!";
    for(let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);
    }
}

funcConst("Micrologic");




