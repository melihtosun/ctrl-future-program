let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

// Encapsulation => Getters and Setters, Bundling data with methods
// Without OOP => ENCAPSULATION
function getWage(baseSalary, overtime, rate) {
  return baseSalary + (overtime * rate);
}

// With OOP => ENCAPSULATION
let employee = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,
  getWage: function() {
    return this.baseSalary + (this.overtime * this.rate);
  }
};

employee.getWage();

// "Best functions are those with no parameters!" - Uncle Bob - Robert C. Martin

// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw')
    }
  };
}
const circle = createCircle(1)
console.log(circle)

// Constructor Function
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw')
//   }
// // }
// const another = new Circle(1);
// console.log(another)

// Primitives are copied by their value, Objects are copied by their reference!

// Example 1 => b=10
let a = 10;
let b = a;
a = 20;

// Example 2 => y.value=20
let x = { value: 10 };
let y = x;
x.value = 20; 

// Adding and removing properties

const newCircle = new Circle(10);

newCircle.location = { x: 1 };

const propertName = 'centerLocation';
circle[propertName] =  { x: 1 };

delete circle.location

for (let key in circle) {
  if (typeof circle[key] !== 'function') {
    console.log(key, circle[key]);
  }
}

const keys = Object.keys(circle);
console.log(keys);

if ('radius' in circle)
  console.log('Circle has radius')


// ABSTRACTION EXAMPLE
function Circle(radius) {
  this.radius = radius;
    
  let defaultLocation = { x: 0, y: 0 };

  let computeOptimumLocation = function(factor) {
    // ...
  };

  this.draw = function() {
    computeOptimumLocation(0.1);
    // defaultLocation
    // this.radius

    console.log('draw')
  };

  Object.defineProperty(this, 'defaultLocation', {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || !value.y)
      throw new Error('Invalid location');
      defaultLocation = value;
    }
  })
}


const another = new Circle(1);