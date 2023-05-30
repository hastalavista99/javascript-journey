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

//the if statement is a conditional statement that executes if the condition is true
function ourTrueorFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }

    return "No, that was false";
}

console.log(trueOrFalse(true));
console.log(ourTrueorFalse(false));
//

//
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }

    if (val > 10) {
        return "Over 10";
    }

    return "10 or under";
}

console.log(testGreaterThan(140));
//

//
function testSize(val) {

    if (val < 5) {
        return "Tiny";
    } else if (val < 10) {
        return "Small";
    } else if (val < 15) {
        return "Medium";
    } else if (val < 20) {
        return "Large";
    } else {
        return "Huge";
    }


}

console.log(testSize(10));
//

//the program below keeps golf scores
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes <= par + 1) {
        return names[4];
    } else if (strokes <= par + 2) {
        return names[5];
    } else if (strokes >= par + 3) {
        return names[6];
    }
}

console.log(golfScore(5, 4));
//
*/
//below is the switch statement
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "stuff";
            break;
    }

    return answer
}

console.log(caseInSwitch(3));



