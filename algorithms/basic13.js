/*
  1 .Print 1-255
  print1To255()
  Print all the integers from 1 to 255.
*/

function print1To255() {
  for (var i = 1; i < 256; i++){
    console.log(i);
  }
}

print1To255();

/* 
  2. Print Odds 1-255
  printOdds1To255()
  Print all odd integers from 1 to 255. 
*/

function printOdds1To255() {
  for (var i = 1; i < 256; i+=2){
    console.log(i);
  }
}

printOdds1To255();

/*
  3. Print Ints and Sum 0-255
  printIntsAndSum0To255()
  Print integers from 0 to 255, and with each integer print the sum so far.
*/

function printIntsAndSum0To255() {
  var sumSoFar = 0;
  for (var i = 0; i <= 255; i++) {
    sumSoFar = sumSoFar + i;
    console.log(i, sumSoFar);
  }
}

printIntsAndSum0To255();

// Expected Output:
// 0 0
// 1 1
// 2 3
// 3 6
// 4 10

/*
  4. Iterate and Print Array
  printArrayVals(arr)
  Iterate through a given array, printing each value.
*/

// var myArray = ['green'];
// console.log(myArray[0])

function printArrayVals(arr){
  for(var i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

var arr1 = [1, 2, 3, 4];
var arr2 = [];
var arr3 = ['green'];
var arr4 = ['c', 't', 'h'];

printArrayVals(arr1);
printArrayVals(arr2);
printArrayVals(arr3);
printArrayVals(arr4);

/*
  5. Find and Print Max
  printMaxOfArray(arr)
  Given an array, find and print its largest element. 
*/

// PSEUDOCODE
// Create a function named printMaxOfArray that takes in an array as input
// Inside the function, create a variable called max and set its value to the first value in the array
// Create a for loop that starts at 0, ends at the array length, and increments by one
// Inside the for loop create a conditional statement - an if statement
// If the current value is greater than max, then make it the new max
// after the loop, console.log max

function printMaxOfArray(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}

printMaxOfArray([4, 2, 8, 1, 33, 45, 0, 10]); // -> 45

/*
  6. Get and Print Average
  printAverageOfArray(arr)
  Analyze an array’s values and print the average.
*/

// Create a function named printAverageOfArray that takes in an array as input
// Create a variable named sum and set it to the first value in the array (position zero)
// Create a for loop that starts at 1, ends at the end of the array, and increments by one
// Update sum by adding the current value to it
// After the for loop, print sum divided by the length of the array

function printAverageOfArray(arr) {
  var sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum / arr.length);
}

printAverageOfArray([1, 2, 3, 4]) // --> 2.5

/*
  7. Array with Odds
  returnOddsArray1To255()
  Create an array with all the odd integers between 1 and 255 (inclusive).  
*/

// PUSH METHOD
var myArr = [1, 2, 6, 3, 7]
myArr.push(5)

function returnOddsArray1To255() {
  var oddsArr = [];
  for (var i = 1; i <= 255; i += 2) {
    oddsArr.push(i);
  }
  return oddsArr;
}

// When we console log a function call, we print the value of the function call
// What is the value of a function? Whatever that function RETURNS.
console.log(returnOddsArray1To255());

/*
  8. Square the Values
  squareArrayVals(arr)
  Square each value in a given array, returning that same array with changed values.
*/

// PSEUDOCODE
// Create a function named squareArrayVals that takes in an array as input.
// Create a for loop that starts at 0, ends at the length of the array, and increments by 1
// Inside the for loop, set each value to be the product of multiplying itself by itself
// After the for loop, return the array

function squareArrayVals(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  return arr;
}

var myArr = [6, 3, 9, 10]
console.log(squareArrayVals(myArr));

/*
  9. Greater than Y
  printArrayCountGreaterThanY(arr, y)
  Given an array and a value Y, count and print the number of array values greater than Y.
*/

function printArrayCountGreaterThanY(arr, y) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > y) {
      count++;
    }
  }
  console.log(count);
}

printArrayCountGreaterThanY([4, 2, 8, 5, 1, 9, 6, 3, 10, 7], 3);

/*
  10. Zero Out Negative Numbers
  zeroOutArrayNegativeVals(arr)
  Return the given array, after setting any negative values to zero.
*/

/*
  11. Max, Min, Average
  printMaxMinAverageArrayVals(arr)
  Given an array, print the max, min and average values for that array.
*/

/*
  12. Shift Array Values
  shiftArrayValsLeft(arr)
  Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
*/

/*
  13. Swap String For Array Negative Values
  swapStringForArrayNegativeVals(arr)
  Given an array of numbers, replace any negative values with the string 'Dojo'.
*/