const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function() {
    arr2 = [...arr1];//the spread operator means that arr2 is equal to the original to most recent value of arr1
    arr1[0] = "potato";
})();

console.log(arr2);//this will output the original value of arr1 without the change
