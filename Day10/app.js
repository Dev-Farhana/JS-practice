// Q6 Iterate with JavaScript While Loops
const ourArray = [];
let i = 0;
while (i < 5) {
  ourArray.push(i);
  i++;
}
console.log(ourArray);

const myArray = [];
// Only change code below this line
let j = 5;
while(j >= 0){
  myArray.push(j);
  j--;
}
console.log(myArray);

// Q7 Iterate with JavaScript For Loops
const myArray2 = [];

// Only change code below this line
for(let i = 1 ; i <= 5; i++){
  myArray2.push(i)
}
console.log(myArray2);

//Q8 Iterate Odd Numbers With a For Loop
const ourArray_ = [];
for (let i = 0; i < 10; i += 2) {
  ourArray_.push(i);
}
console.log(ourArray_);
// Setup
const myArray3 = [];
// Only change code below this line
for( let i = 1; i < 10; i += 2){
  myArray3.push(i)
}
console.log(myArray3);

//Q9 Count Backwards With a For Loop
// Example: => { const ourArray = [];
// for (let i = 10; i > 0; i -= 2) { ourArray.push(i) }
// }
// Setup
const myArr = [];

// Only change code below this line
for(let i = 9; i > 0 ; i -= 2){
  myArr.push(i);
}
console.log(myArr);

// Q10 Iterate Through an Array with a For Loop
// Setup
const my_Arr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for(let i = 0; i < my_Arr.length ; i++){
  total += my_Arr[i];
}
  console.log(my_Arr);
