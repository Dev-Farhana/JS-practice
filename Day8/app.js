//q7 Delete Properties from a JavaScript Object
const myDog4 = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};  
  // myDog4[tails];
  
  console.log(myDog4);
  delete myDog4.tails;
  delete myDog4["legs"];
  console.log(myDog4);

//   Using Objects for Lookups
//   Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to lookup values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.

// Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.
function phoneticLookup(val) {
    let result = "";  
    // Only change code below this line
    switch(val) {
      case "alpha":
        result = "Adams";
        break;
      case "bravo":
        result = "Boston";
        break;
      case "charlie":
        result = "Chicago";
        break;
      case "delta":
        result = "Denver";
        break;
      case "echo":
        result = "Easy";
        break;
      case "foxtrot":
        result = "Frank";
    }
  
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");

function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
   const lookup = {
     alpha : "Adams" ,
     bravo : "Boston",
     charlie : "Chicago",
     delta : "Denver",
     echo : "Easy",
     foxtrot : "Frank"
   }
   result = lookup[val] 

    // Only change code above this line
    return result;

  }
  
  phoneticLookup("charlie");
  console.log(   phoneticLookup("charlie")  );