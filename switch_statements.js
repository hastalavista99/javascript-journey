
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

console.log(caseInSwitch(3));//this outputs the value of case 3 to the console

//we can use an object to  replace the switch statement above

function caseInSwitch(val) {
    var answer = "";
    var lookup = {
        1: "alpha",
        2: "beta",
        3: "gamma",
        4: "delta"
    };

    result = lookup[val];

    return result
}

//It is possible to get the same output for a number of switch cases by omitting the break statement as in the example below
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
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

console.log(caseInSwitch(2));
//the value of cases 1, 2 and 3 is the same as the break statement is omitted upto until after the third case



