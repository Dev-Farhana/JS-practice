// freeCodeCamp Question Practice 

// Profile Lookup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    for(let i=0; i < contacts.length; i++){
      if (contacts[i].firstName === name ){
        if(contacts[i][prop] !== undefined){
          return contacts[i][prop];
        }
        else{
          return  "No such property";
        }
      }
    }
    return "No such contacts";
    // Only change code above this line
  }
  
  lookUpProfile("Akira", "likes");
  console.log( lookUpProfile("bob", "number") );

//   A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

// If both are true, then return the "value" of that property.

// If name does not correspond to any contacts then return the string No such contact.

// If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

function lookUpProfile(name, prop) {
  // Only change code below this line
  for(let i=0; i < contacts.length; i++){
    if(contacts[i].firstName === name){
      if(contacts[i][prop] !== undefined ){
        return contacts[i][prop]
      }
      else{
        return "No such property"
      }
    }
  }
    return "No such contact"
  // Only change code above this line
}

// Generate Random Fractions with JavaScript

function randomFraction() {
  // return 0;
  // Only change code above this line
  return Math.random();
}

// Generate Random Whole Numbers with JavaScript
//  Generate and return a random whole number in the range from 0 to 9.
function randomWholeNum() {
  return Math.floor( Math.random() * 10) ;
}

// Generate Random Whole Numbers within a Range
// Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin and less than or equal to myMax.

function randomRange(myMin, myMax) {
  // return 0;
  return Math.floor(Math.random() * (myMax - myMin +1)) + myMin;
}

// randomRange should use both myMax and myMin, and return a random number in your range.
console.log(randomRange(2,12));

// Use the parseInt Function
function convertToInteger(str) {
  return parseInt(str)
}

convertToInteger("56");
console.log(convertToInteger("99"));
console.log(convertToInteger("Ninty Nine"));


// Use the parseInt Function with a Radix
function convertToInteger(str) {
  // return parseInt(str, radix)
  return parseInt(str, 2)

}

convertToInteger("10011");
console.log(  convertToInteger("10011") );
console.log(  convertToInteger("111001") );
console.log(  convertToInteger("00") );

// Use the Conditional (Ternary) Operator
// Use the conditional operator in the checkEqual function to check if two numbers are equal or not. The function should return either the string Equal or the string Not Equal.

function checkEqual(a, b) {
 return a === b ? "Equal" : "Not Equal";
}

console.log( checkEqual(1, 2));

// Use Multiple Conditional (Ternary) Operators
// In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - to check if a number is positive, negative or zero. The function should return positive, negative or zero.


function checkSign(num) {
  return (num === 0) ? "Zero Number" : (num > 0) ? "Positive" : "Negative" 
  return (num === 0) ? "Zero" : (num < 0) ? "negative" : "positive"
}

checkSign(10);
console.log(checkSign(-3));

// Use Recursion to Create a Countdown
function countdown(n){
  if( n < 1){
    return [];
  } else{
    const countArr = countdown(n - 1)
    countArr.unshift(n);
    return countArr;
  }

}
console.log(countdown(9));

// Use Recursion to Create a Range of Numbers
//  The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.


function rangeOfNumbers(startNum, endNum) {
  if(startNum > endNum){
    return [];
  } else{
    return [startNum, ...rangeOfNumbers(startNum + 1 , endNum)];
  }
};
console.log(rangeOfNumbers(1,5));

console.log(rangeOfNumbers(3, 8));

console.log(rangeOfNumbers(8, 5));
