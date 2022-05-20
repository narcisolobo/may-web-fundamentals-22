/* 
  Arrays
  Arrays are reference datatypes that can hold a collection of values.
  Each value can be accessed and/or set by its index (position).
*/

var colors = ["red", "blue", "green", "yellow", "purple"];
console.log(colors.length);
// Setting and getting values in an array with bracket notation.
colors[2] = 'purple';

console.log(colors);

console.log(colors[1]);

// You can mix and match datatypes in an array. No restrictions.
var narciso = ["Narciso", "Lobo", 51, true, [1, 2, 3]];

// Sentry, start, stop, change
// Loop through array and print each value.
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

var fruit1 = "apples";
var fruit2 = "oranges";

var temp = fruit2;
fruit2 = fruit1;
fruit1 = temp;

console.log(fruit2 + " and " + fruit1);

// Reversing an array
// Write a function reverse( arr ) to reverse an array, if we were given...

["a", "b", "c", "d", "e"];

// we expect to get back...

["e", "d", "c", "b", "a"];

function reverse(arr) {
  for (var left = 0; left < arr.length / 2; left++) {
    var right = arr.length - 1 - left;
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }
  return arr;
}

console.log(reverse(['a', 'b', 'c', 'd', 'e']));