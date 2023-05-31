//The ternary operator involve the use of "?" character in the following order
//condition ? statement-if-true : statement-if-false;
function test(a, b){
    return a > b ? "Yes" : "No";
}

console.log(test(4,7));


//You can nest ternary operators to give them even more power
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(-2));//returns negative

