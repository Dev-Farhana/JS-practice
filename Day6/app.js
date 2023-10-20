// Day 6
// Replacing If Else Chains with Switch
function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
  
    // if (val === "bob") {
    //   answer = "Marley";
    // } else if (val === 42) {
    //   answer = "The Answer";
    // } else if (val === 1) {
    //   answer = "There is no #1";
    // } else if (val === 99) {
    //   answer = "Missed me by this much!";
    // } else if (val === 7) {
    //   answer = "Ate Nine";
    // }
    switch (val) {
        case "bob":
            return answer = "Marley";
            break;
        case 42:
            return answer = "The Answer";
            break;
        case 1:
            return answer = "There is no #1";
            break;
        case 99:
            return answer = "Missed me by this much!";
            break;
        case 7:
            return answer = "Ate Nine";
            break;
        default:
            break;
    }
    return answer;
  }
  
chainToSwitch(7);

// Returning Boolean Values from Functions
function isLess(a, b) {
    // Only change code below this line
    // if (a < b) {
    //   return true;
    // } else {
    //   return false;
    // }
    return  (a < b) ;
    // Only change code above this line
  }
isLess(10, 15);

// Return Early Pattern for Functions
function abTest(a, b) {
    // Only change code below this line
    //   if(a,b < 0){
    //     return undefined;
    //   }
    if(a < 0){
        return undefined;
    }
    else if(b < 0){
        return undefined;
    }
    // Only change code above this line
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  abTest(2,2);
  console.log(abTest(-2,2));


//   Counting Cards
// let count = 0;
// function cc(card) {
  // Only change code below this line  
//   if(card === 2){
//     count ++;
//     return "Bet";
//   }
//   switch(card){
//     case 7:
//     return "Hold";
//     break;
//   }
   
//   return "Change Me";
  // Only change code above this line
// }

// cc(2); cc(3); cc(7); cc('K'); cc('A');

// console.log(cc(2));
// console.log(cc('K')); 


// let count = 0;

function cc(card) {
  // Only change code below this line
  var regex = /[JQKA]/;
  if (card > 1 && card < 7) {
    count++;
  } else if (card === 10 || regex.test(card)) {
    count--;
  }
  if (count > 0) return count + " Bet";
  return count + " Hold";
}


// let count = 0;
let count = 0;

function cc(card) {
  // Only change code below this line
  if(card > 1 && card < 7 ){
    count++
  }
  else if(card === 10 || card === "J" || card ==="K" || card==="Q" || card ==="A"){
    count--;
  }
  var holdbet = 'Hold'
  if (count > 0) {
    holdbet = 'Bet'
  }
  return count + " " + holdbet;
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc(4));

// var count = 0;
function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  var holdbet = 'Hold'
  if (count > 0) {
    holdbet = 'Bet'
  }
  return count + " " + holdbet;
}

cc(2); cc('K'); cc(10); cc('K'); cc('A');
console.log(cc(-4))