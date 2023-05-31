//A do while loop runs at least once before checking the condition

var arr = [];
var i = 10;

do {
    arr.push(i);
    i++;
} while (i < 5)

console.log(i, arr);//the output has i=11 and 10 added to the array
