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


//the program below keeps record of golf scores
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
