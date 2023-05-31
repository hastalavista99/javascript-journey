var randomNum = Math.floor(Math.random() * 20);//this generates a random number between 0 and 19(20 not included)

console.log(randomNum);

//we can also use a range from where we can get random numbers

function randomRange(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

var myRandom = randomRange(5, 15);

console.log(myRandom);
