// Variables and Datatypes
// JavaScript naming conventions - camel case
// Rules of naming variables in JavaScript
// Cannot have spaces
// Cannot have dashes/hyphens
// Cannot begin with a number

var myName = 'Narciso';
console.log(myName);

// Datatypes
// Primitive Datatypes - one value

// Strings - strings of characters, bookended by quotation marks
// Numbers - decimals and integers are both considered numbers in JS
// Booleans - true or false

var age = 32;
var percentage = .5;

var isSunny = false;

if (isSunny) {
  console.log('wear shades')
} else {
    console.log('leave shades at home')
}

// For Loop
// 1. Sentry (var i)
// 2. Where it starts (ours starts at 1)
// 3. Where it stops (when condition is no longer true)
// 4. How it changes

// A conditional statement evaluates to true or false ('as long as')

for (var i = 1; i <= 10; i++) {
  console.log(i);
}

/* 
  Print 1-255
  print1To255()
  Print all the integers from 1 to 255.
*/

for (var i = 1; i <= 255; i++) {
  console.log(i);
}

