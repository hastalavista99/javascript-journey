// in-line comment
/*
multiline comment
goes here


var a = 12;
var b = "I am a string";
var namex;
namex = "ThisName"

a += 12;
firstLetter = namex[0]
console.log(firstLetter);

function wordBlank(noun, adjective, verb, adverb) {
    var result = "";
    result += "The " + adjective + " " + noun + " " + verb + " to the store " + adverb;

    return result
}


console.log(wordBlank("dog", "big", "ran", "quickly"));
console.log(wordBlank("man", "tall", "walked", "slowly"));
console.log(wordBlank("lady", "busty", "strolled", "proudly"));


var arr = [4, 2, 4];
arr.push(8);

console.log(arr);

 var arr = ["Jack", "Williams", "Greg", 3, 5];
 arr.shift();
 arr.unshift("Bob");

 console.log(arr);


//this is a multi dimensional array
var myList = [["cereal", 3], ["milk", 2], ["bananas", 2]];

function ourFunctionWithArgs(a, b) {
    console.log(a-b);
}

ourFunctionWithArgs(15, 7);
//

var myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if  (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if  (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output)

}

fun1();
fun2();


var sum = 0
function addThree() {
    sum = sum + 3;
}
//the function above returns an undefined value as the return parameters are not defined, sum stays at 0


//the function below however has a return statement, this returns the new sum value and if logged onto the console, outputs 5
function addFive() {

    return sum += 5;
}

console.log(addFive());

//
function nextInLine(arr, item) {

    arr.push(item);

    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
//


//
*/

function abTest(a, b) {
    if  (a < 0 || b < 0) {
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(-2, 2))




