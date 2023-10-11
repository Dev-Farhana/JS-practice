// Access Multi-Dimensional Arrays With Indexes
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
//   const myData = myArray[0][0];
  const myData = myArray[2][1];

//   Manipulate Arrays With push Method
const myArray2 = [["John", 23], ["cat", 2]];
// Push ["dog", 3] onto the end of the myArray variable.
// myArray2.push(["Dog", 3]); 
// myArray2.push([["Dog", 3]]);
console.log(myArray2);

// Manipulate Arrays With pop Method
const myArray3 = [["John", 23], ["cat", 2]];
// Only change code below this line
myArray3.pop();
// let removedFromMyArray= myArray3.pop();

// Manipulate Arrays With shift Method
const myArray4 = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();

// Manipulate Arrays With unshift Method
const myArray5 = [["John", 23], ["dog", 3]];
myArray5.shift();
myArray5.unshift(["Paul", 35]);

// Shopping List
// const myList = [];
const myList = [["Chocolate Bar", 15], ["Ice", 22],["Soda",9],["Naan",10],["GhulabJamun", 10]];
// myList = [ ["Chocolate Bar", 15], ["Ice", 22],["Soda",9],["Naan",10],["GhulabJamun", 10]
//  ]

// Write Reusable JavaScript with Functions
function reusableFunction(){
  console.log("Hi World");
} 
reusableFunction();

// Passing Values to Functions with Arguments
function functionWithArgs(val1,val2){
  console.log(val1,val2);
}
  functionWithArgs ("Hello", "World");
function functionWithArgs(val1,val2){
    console.log(val1 + val2);
}
  functionWithArgs (6,6);

  // Return a Value from a Function with Return
  // Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.
  function timesFive(num){
    const ans = num*5;
    console.log(ans);
  }
    timesFive (4);
  function timesFive(num){
      // const ans = num*5;
      return num*5;
  }
      timesFive(5);
      timesFive(2);
      timesFive(0);


// Global Scope and Functions
// Using let or const, declare a global variable named myGlobal outside of any function. 
// Initialize it with a value of 10.
// Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.

// Declare the myGlobal variable below this line
let myGlobal = 10; 

function fun1() {
  // Assign 5 to oopsGlobal here
oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// Local Scope and Functions
function myLocalScope() {
  // Only change code below this line
let myVar=true;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();
// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

// Global vs. Local Scope in Functions
// It is possible to have both local and global variables with the same name. 
// When you do this, the local variable takes precedence over the global variable.
const outerWear = "T-Shirt";
function myOutfit() {
  // Only change code below this line
const outerWear = "sweater";
  return outerWear;
}
myOutfit();

// Understanding Undefined Value returned from a Function
// A function can include the return statement but it does not have to. 
// In the case that the function doesn't have a return statement, when you call it,
//  the function processes the inner code but the returned value is undefined.

let sum = 0;
function addThree() {
  sum = sum + 3;
}
// Only change code below this line
function addFive(){
  sum = sum + 5;
}
addThree();
addFive();

// Assignment with a Returned Value
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
// Only change code below this line
function processArg(){
  return processed;
}
// processArg(7);
// processArg(processed);

processed = processArg(7); 

