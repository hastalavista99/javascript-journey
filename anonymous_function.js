//Anonymous functions are created using arrows as follows

var myConcat = function (arr1, arr2) {
    return arr1.concat(arr2);
};

console.log(myConcat([1, 3], [3, 5, 2]));

// the function above transforms into

var myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 3], [3, 5, 2]));

//both functions have the same output
