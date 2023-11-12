// FreeCodeCamp ES6

//Q#1 Compare Scopes of the var and let Keywords
function checkScope() {
    // var i = 'function scope';
    let i = 'function scope';

    if (true) {
    //   i = 'block scope';
     let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    // return i;
}
console.log(checkScope());

//Q#2   Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
  // Using s = [2, 5, 7] would be invalid
  s[0]= 2;
  s[1]= 5;
  s[2]= 7;
}
editInPlace();

// Q#3 Prevent Object Mutation
// In this challenge you are going to use Object.freeze to prevent mathematical constants from changing. You need to freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add, or delete properties.

function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);
      MATH_CONSTANTS.PI = 3.3;
  
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log( freezeObj());

//Q#4 Use Arrow Functions to Write Concise Anonymous Functions
// var magic = function() {
const magic = () => {
    return new Date();
};

//Q#5 Write Arrow Functions with Parameters
// Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.

// var myConcat = function(arr1, arr2) {
const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
  };
  
console.log(myConcat([1, 2], [3, 4, 5]));

//Q#6 Set Default Parameters for Your Functions
// Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.

// const increment = (number, value) => number + value;
const increment = (number, value = 1 ) => number + value;
console.log(increment(2));

//Q#7 Use the Rest Parameter with Function Parameters
// Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.

// const sum = (x, y, z) => {
const sum = (...args) => {
    // const args = [x, y, z];
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
}

//Q#8 Use the Spread Operator to Evaluate Arrays In-Place
// Copy all contents of arr1 into another array arr2 using the spread operator.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

// arr2 = [];  // Change this line
    arr2 = [...arr1];  
console.log(arr2);

//Q#9 Use Destructuring Assignment to Extract Values from Objects
// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
//   [ES-5 version]
//   const today = HIGH_TEMPERATURES.today;
//   const tomorrow = HIGH_TEMPERATURES.tomorrow;

  const {today,tomorrow } = HIGH_TEMPERATURES;
  console.log(today);

//Q#10 Use Destructuring Assignment to Assign Variables from Objects
// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

const HIGH_TEMPERATURES2 = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
      
//   const highToday = HIGH_TEMPERATURES.today;
//   const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES2;

