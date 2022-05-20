console.log('hello world');

console.dir(this);

// JS Objects have properties and methods
// Just like object IRL have characteristics and things they can do.

// Object Literal Notation
// key - value pairs
var myCar = {
  make: 'Hyundai',
  model: 'Kona',
  color: 'green',
  numWheels: 4,
  displayStats: function () {
    console.log(this.make, this.model, this.color, this.numWheels);
  }
}

// setting values using bracket notation
myCar['color'] = 'blue';

// getting values using bracket notation
console.log(myCar['color']);

// setting values using dot notation
myCar.color = 'purple';

// getting values using dot notation
console.log(myCar.color);

myCar.displayStats();

function disappear(element) {
  element.remove();
}