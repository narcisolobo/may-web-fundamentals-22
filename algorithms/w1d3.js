// Week 1 Day 3 - Always isSunny 

// Today, let's learn about conditionals! Remember to "T-diagram" to track our variables as we go so we can predict what the outcome will be.

// Always isSunny
var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";

if (isSunny) {
  whatToBring += "sunglasses, ";
}
if (temperature < 50) {
  whatToBring += "a coat, ";
}
if (isRaining) {
  whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

console.log(whatToBring);

// Prepare for downcount
for (var i = 10; i > 0; i--) {
  if (i != 2) {
    console.log(i);
  } else {
    console.log("ignition!");
  }
}

console.log("liftoff!");

// Count positives
var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    countPositives++;
  }
}

console.log("there are " + countPositives + " positive values");
