//this is an introduction to the for loop
//A for loop structure has three parts enclosed in brackets, the initialization, the condition and the increment/decrement

var arr = [];

for (var i = 0; i < 5; i++) {
    arr.push(i);
}

console.log(arr);//this outputs an array [0,1,2,3,4]

//one can also use a for loop to count backwards

var myArray = [];

for (var i = 10; i > 0; i--) {
    myArray.push(i);
}

console.log(myArray);

//The for loop is a mainly used to iterate through objects of an array/list
//here we are iterating through this integer array and adding the numbers in it
var anArray = [4, 5, 6, 4, 3];
var total = 0;

for (var i = 0; i < anArray.length; i++) {
    total += anArray[i];
}

console.log(total);

//A nested for loop can be used to iterate through a multi-dimensional array as follows
//Here we are iterating through a multi-dimensional array and multiplying all the elements in the array

function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }

    return product
}

//below we pass in a multi-dimesional array as the function parameter
var product = multiplyAll([[3, 4], [5, 2], [8, 4], [6, 2, 4]]);

console.log(product);


