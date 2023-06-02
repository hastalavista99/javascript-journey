
const sum = (function () {
    return function sum(...args) {//the rest operator '...' converts the arguments into an array called args
        return args.reduce((a, b) => a + b, 0);//this reduces the array by adding all the elements
    };
})();

console.log(sum(1, 2, 3));//since we used the rest operator we can pass in any number of arguments

