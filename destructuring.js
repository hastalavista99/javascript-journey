//below is a destructuring assignment of an array

const [z, x, , y] = [1, 2, 3, 4, 5, 6];//this assigns values as follows z=1, x=2, y=4, the third element is skipped
console.log(z, x, y);

let a = 8, b = 6;

(() => {
    "use strict";
    [a, b] = [b, a]//interchanges the values
})();

console.log(a);
console.log(b);


/*the destructuring assignment can also be used with the rest operator as follows
*/
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {

    const [ , ,...arr] = list;//the first two empty spaces tells the program to do nothing for the fist two elements and assign the rest of the elements to the arr variable

    return arr;
}

const arr = removeFirstTwo(source);
console.log(arr);//outputs the source but without the first two elements
console.log(source);

//we can use destructuring on function parameters

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = (function () {

    return function half({ max, min }) {//we used destructuring instead passing the entire stats object, we passed in exactly what we wanted
        return(max + min) / 2.0;
    };
})();

console.log(stats);
console.log(half(stats));
