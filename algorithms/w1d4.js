// Functions - What are they even?
// A function is a set of steps to accomplish a task. Like a recipe.
// And like a recipe, sometimes functions need ingredients. We call these ingredients "parameters."
// In order to execute a function, you must call it by name. We call this, "invoking a function."

// function declaration
function greeting() {
  console.log("Hello");
}

// function invokation
// greeting();

// function declaration with parameter(s)
function greetingName(name) {
  console.log("Hello", name);
}

// supply the necessary arguments
// greetingName('Narciso');

function greetingNameWithTime(timeOfDay, name) {
  // template literals
  console.log(`Good ${timeOfDay}, ${name}.`);
  // console.log('Good ' + timeOfDay + ', ' + name + '.')
}

// greetingNameWithTime('morning', 'Adrian');
// Good morning, Adrian.

function add(a, b) {
  // console.log(a + b);
  return a + b;
}

// the value of a function call is whatever that function returns.
var result = add(2, 2);

console.log("result: " + result);

// DRY code
// Don't Repeat Yourself

var x = 5;

function setX(newValue) {
  x = newValue;
}

// console.log(x); // 5
setX(15);
// console.log(x); // 15

var x = 5;

function addToX(amount) {
  return x + amount;
  console.log("hello there");
}

console.log(x); // 5
var result = addToX(-10);
console.log(result); // -5
console.log(x); // 5

/* 
  Code Flow - Is the Array a Palindrome
  A palindrome is a word that is spelled the same if read forwards or backwards. Some excellent palindrome examples are:

  racecar
  tacocat
  But in our case we'll be looking at some arrays, can the values in the array be read the same forwards as backwards
*/

function isPal(arr) {
  for (var left = 0; left < arr.length / 2; left++) {
    var right = arr.length - 1 - left;
    if (arr[left] != arr[right]) {
      return "Not a pal-indrome!";
    }
  }
  return "Pal-indrome!";
}

var result1 = isPal([1, 1, 2, 2, 1]);
console.log(result1);

var result2 = isPal([3, 2, 1, 1, 2, 3]);
console.log(result2);
