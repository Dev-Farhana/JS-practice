// Selecting from Many Options with Switch Statements
//If you need to match one value against many options, you can use a switch statement. A switch statement compares the value to the case statements which define various possible values. Any valid JavaScript statements can be executed inside a case block and will run from the first matched case value until a break is encountered.
//   Write a switch statement which tests val and sets answer for the following conditions:
// 1 - alpha
// 2 - beta
// 3 - gamma
// 4 - delta

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val){
        case 1:
        return "Alpha";
        break;
        case 2:
        return "Beta";
        break;
        case 3: 
        return "Gamma";
        break;
        case 4: 
        return "Delta" ;
    }  
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);

// Adding a Default Option in Switch Statements
// In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.
// Write a switch statement to set answer for the following conditions:
// a - apple
// b - bird
// c - cat
// default - stuff


function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
        case "a":
            return "apple";
            break;
        case "b":
            return "bird";
            break;
        case "c":
            return "cat";
            break;
        // default: "stuff";
        default:
        answer = "stuff";
    }        
    // Only change code above this line
    return answer;
}
  
switchOfStuff(1);


// Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
          answer = "Low";
          break;
        case 4:
        case 5:
        case 6:
            break;
          answer = "Mid";
        case 7:
        case 8: 
        case 9:
        answer = "High";
        break;
      }
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(1);

  