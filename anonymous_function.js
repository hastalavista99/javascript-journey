//Anonymous functions are created using arrows as follows

const myConcat = function (arr1, arr2) {
    return arr1.concat(arr2);
};

console.log(myConcat([1, 3], [3, 5, 2]));

// the function above transforms into

const myconcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myconcat([1, 3], [3, 5, 2]));

//both functions have the same output
