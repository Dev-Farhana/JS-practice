//Q#11 Use Destructuring Assignment to Assign Variables from Nested Objects
// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  //   const lowToday = LOCAL_FORECAST.today.low;
//   const lowToday = LOCAL_FORECAST["today"]["low"];
//   const highToday_ = LOCAL_FORECAST.today["high"];

  const { today: { low: lowToday, high: highToday_ } } = LOCAL_FORECAST;
console.log(lowToday);

// Q#12  Use Destructuring Assignment to Assign Variables from Arrays
let a = 8, b = 6;
// Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.

[a,b] = [b,a];

//Q#13 Destructuring via rest elements
function removeFirstTwo(list) {
    const [a, b, c, ...shorterList] = list; 
    return shorterList;
  }  
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log( sourceWithoutFirstTwo );  
console.log(sourceWithoutFirstTwo);

// Q#14 Use Destructuring Assignment to Pass an Object as a Function's Parameters
// Use destructuring assignment within the argument to the function half to send only max and min inside the function.

  const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
    // const half = (stats) => (stats.max + stats.min) / 2.0; 
  // const half = ({ max, min = stats.min }) => (max + min) / 2.0;
const half = ({ max, min }) => (max + min) / 2.0;

// Q#15 Create Strings using Template Literals
// Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.

  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = arr.map(item =>       
      `<li class="text-warning"> ${item} </li>`
      )  
    return failureItems;
  }
  
const failuresList = makeList(result.failure);

// Q#16 Write Concise Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) => {
  // Only change code below this line
  // return {
  //   name: name,
  //   age: age,
  //   gender: gender
  // };
  return { name, age, gender};

};

// Q#17 Write Concise Declarative Functions with ES6
// Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.

const bicycle = {
  gear: 2,
  setGear (newGear) { return this.gear = newGear;}
  // setGear(newGear) {  "use strict";  this.gear = newGear;}
};

bicycle.setGear(3);
console.log(bicycle.gear);

//Q18 Use class Syntax to Define a Constructor Function
// Use the class keyword and write a constructor to create the Vegetable class.
// The Vegetable class allows you to create a vegetable object with a property name that gets passed to the constructor.

class Vegetable{
  constructor(name) {
    this.name = name;
  }
  log(){
    console.log(this.name)
  }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
carrot.log(); // Should also display 'carrot'


//Q#19 Use getters and setters to Control Access to an Object
// Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.
// In the class, create a getter to obtain the temperature in Celsius and a setter that accepts a temperature in Celsius.

// Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.
// Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.
// This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.
// In other words, you are abstracting implementation details from the user.
 
class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }
  
  get temperature() {
    return (5 / 9) * (this._fahrenheit - 32);
  }
  
  set temperature(celsius) {
    return this._fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

// second method
class Thermostat {
  constructor(fahrenheit) {
    this._celsius = (5 / 9) * (fahrenheit - 32);
  }
  
  get temperature() {
    return this._celsius;
  }
  
  set temperature(celsius) {
    return this._celsius = celsius;
  }
}

// Q20 Create a Module Script
