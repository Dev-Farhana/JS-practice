// Build JavaScript Objects

//Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

// Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.
// Here's a sample cat object:

const cat = {
    "name": "Whiskers",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
  };

const myDog = {
    // Only change code below this line
    name: "Chicu",
    legs: 4,
    tails: 1,
    friends: ["None", "Me"]
    // Only change code above this line
  };
 
//   Accessing Object Properties with Dot Notation
const one = myDog.legs;


//q2 Accessing Object Properties with Dot Notation

const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
// Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt.

// Only change code below this line
// const hatValue = testObj;  
// const shirtValue = testObj;
const shirtValue = testObj.shirt;    // Change this line
const hatValue = testObj.hat;      // Change this line

//q3  Accessing Object Properties with Bracket Notation

const testObj2 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
// Read the values of the properties an entree and the drink of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.


// Only change code below this line
// const entreeValue = testObj2;   // Change this line
// const drinkValue = testObj2;    // Change this line

// Only change code below this line
const entreeValue = testObj2["an entree"];   
const drinkValue = testObj2["the drink"];    

//q4 Accessing Object Properties with Variables
const testObj3 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
// Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.

// Only change code below this line
// const playerNumber = 42;  // Change this line
// const player = testObj3;   // Change this line

const playerNumber = 16;  
const player = testObj3[playerNumber];   

//q5 Updating Object Properties
// const ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"]
// };
// Here's how we update his object's name property: ourDog.name = "Happy Camper"; or ourDog["name"] = "Happy Camper"; Now when we evaluate ourDog.name, instead of getting Camper, we'll get his new name, Happy Camper.
const myDog_ = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
// Only change code below this line
// Update the myDog object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.
 myDog_["name"] = "Happy Coder";
  // myDog_.name = "Happy Coder";

//q6 Add New Properties to a JavaScript Object
const myDog2 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
// Add a bark property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.

// myDog2["bark"] = "woof";
myDog2.bark = "woof";

//q7 Delete Properties from a JavaScript Object
const myDog4 = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
// Delete the tails property from myDog. You may use either dot or bracket notation.
// myDog4[tails];

console.log(myDog4);
delete myDog4.tails;
delete myDog4["legs"];
console.log(myDog4);
 
//---------------------- the End ------------------------------- // 