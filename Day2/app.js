//------> Stand in Line
// In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.
// Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
// Add the number to the end of the array, then remove the first element of the array.
// The nextInLine function should then return the element that was removed.

function nextInLine(arr,item){
    arr.push(item);
    return arr.shift();
}
let testArr = [1,2,3,4,5];
// Display code
console.log("Before: " + (testArr));
console.log(nextInLine(testArr, 8));
console.log("After: " + (testArr));

let test = [2,5,10] ;
console.log("Before: " + (test));
console.log(nextInLine(test, 15));
console.log("After: " + (test));

//--------> Understanding Boolean Values
function welcomeToBooleans() {
let flag = false  
    return !flag; // Change this line
}
console.log(welcomeToBooleans());

// -----> Use Conditional Logic with If Statements
// Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.

function trueOrFalse(wasThatTrue) {
    // Only change code below this line
  if(wasThatTrue === true){
      return "Yes";
  }
  else return "No";
}
console.log(trueOrFalse(true));

// --->Comparison with the Equality Operator
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
testEqual(10);

// ---->Comparison with the Strict Equality Operator
function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);

// --->  Practice comparing different values
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");
  