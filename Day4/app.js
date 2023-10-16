//Introducing Else Statements
// When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.

function testElse(val) {
    let result = "";  
    if (val > 5) {
      result = "Bigger than 5";
    }
  
    // else (val <= 5) {
    //   result = "5 or Smaller";
    // }

     else {
      result = "5 or Smaller";
    }
    
    // Only change code above this line
    return result;
  }
  
  testElse(4);

//Introducing Else If Statements
// If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.

function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
    else if (val < 5) {
      return "Smaller than 5";
    }

    else{
       return "Between 5 and 10";
    }

  }
  
  testElseIf(7);

//   Logical Order in If Else Statements
//Order is important in if, else if statements.

function orderMyLogic(val) {
    if (val < 11) {
      return "Less than 10";
    } else if (val < 6) {
      return "Less than 5";
    } else {
      return "Greater than or equal to 10";
    }
  }
  console.log(orderMyLogic(6));

  function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
console.log(  orderMyLogic(4));  

//Chaining If Else Statements
// if/else statements can be chained together for complex logic. Here is pseudocode of multiple chained if / else if statements:

function testSize(num) {
    // Only change code below this line
    return "Change Me";
    // Only change code above this line
  }  
  testSize(7);
//   Write chained if/else if statements to fulfill the following conditions:

// num < 5 - return Tiny
// num < 10 - return Small
// num < 15 - return Medium
// num < 20 - return Large
// num >= 20 - return Huge

function testSize(num) {
    // Only change code below this line
    if(num<5){
        return "Tiny"
    }
    else if (num<10){
        return "Small"
    }
    else if (num<15){
        return "Medium"
    }
    else if (num<20){
        return "Large"
    }
    else if(num>= 20){
        return "Huge"
    }
    return "Change Me";
  }  
  testSize(7);
  console.log(testSize(21));
  console.log(testSize(20));
  console.log(testSize(10));

  //Golf Code
//   In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

//   Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest)

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// function golfScore(par, strokes) {
//   // Only change code below this line
//   if(strokes === 1){
//     return names[0];
//   }
//   else if(strokes <= -2){
//     return names[1];
//   }
//   return "Change Me";
//   // Only change code above this line
// }

function golfScore(par, strokes) {
  // Only change code below this line
  if(strokes === 1){
    return names[0];
  }
  else if(strokes === 2){
    return names[1];
  }
  else if(strokes <= par-2){
    return names[1];
  }
  else if(strokes === par -1){
    return names[2];
  }
  else if(strokes === par ){
    return names[3];
  }
    else if(strokes === par+1){
    return names[4];
  }
  else if(strokes === par+2){
    return names[5];
  }
  else if(strokes >= par+3){
    return names[6];
  }
  return "Change Me";
  // Only change code above this line
}

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);
golfScore(5, 4);
console.log(golfScore(5, 5));

function golfScore(par, strokes) {
  return strokes === 1
    ? names[0]
    : strokes <= par - 2
    ? names[1]
    : strokes === par - 1
    ? names[2]
    : strokes === par
    ? names[3]
    : strokes === par + 1
    ? names[4]
    : strokes === par + 2
    ? names[5]
    : names[6];
}


