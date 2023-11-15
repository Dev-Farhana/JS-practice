// Q20 Create a Module Script
// Add a script to the HTML document of type module and give it the source file of index.js
    // <script type="module" src="index.js"></script>

//Q21 Use export to Share a Code Block
const uppercaseString = (string) => {
    return string.toUpperCase();
}  
const lowercaseString = (string) => {
    return string.toLowerCase()
}
export {uppercaseString, lowercaseString};

//Q22 Reuse JavaScript Code Using import  
// Add the appropriate import statement that will allow the current file to use the uppercaseString and lowercaseString functions you exported in the previous lesson. These functions are in a file called string_functions.js, which is in the same directory as the current file.

// import {uppercaseString , lowercaseString} from './string_functions.js';

uppercaseString("hello");
lowercaseString("WORLD!");

// Q23 Use * to Import Everything from a File
// The code in this file requires the contents of the file: string_functions.js, that is in the same directory as the current file. Use the import * as syntax to import everything from the file into an object called stringFunctions.

// import * as stringFunctions from './string_functions.js';
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

//Q#24 Create an Export Fallback with export default
//The following function should be the fallback value for the module. Please add the necessary code to do so.

export default function subtract(x, y) {
  return x - y;
}

// Q25 Import a Default Export
// In the following code, import the default export from the math_functions.js file, found in the same directory as this file. Give the import the name subtract.

// import subtract from "./math_functions.js";
subtract(7,4);

// Q26 Create a JavaScript Promise
// Create a new promise called makeServerRequest. Pass in a function with resolve and reject parameters to the constructor.

const myPromise = new Promise((resolve, reject) => { });
const makeServerRequest_ = new Promise ((resolve,reject) => {});
const serverConnect = new Promise ((resolve,reject) => { });

//Q27 Complete a Promise with resolve and reject
// Make the promise handle success and failure. If responseFromServer is true, call the resolve method to successfully complete the promise. Pass resolve a string with the value We got the data. If responseFromServer is false, use the reject method instead and pass it the string: Data not received.

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      // Change this line
      resolve("We got the data");
    } else {  
      // Change this line
      reject("Data not received");
    }
});

// Q28 Handle a Fulfilled Promise with then
// Add the then method to your promise. Use result as the parameter of its callback function and log result to the console.

const makeServerRequest2 = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      makeServerRequest.then(result => {
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  console.log(result);
    })
});

// Q29 Handle a Rejected Promise with catch
// Add the catch method to your promise. Use error as the parameter of its callback function and log error to the console.
const makeServerRequest3 = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
    makeServerRequest3.catch(error => {
        if(responseFromServer) {
            resolve("We got the data");
        } else {  
            reject("Data not received");
        }
        console.log(error);
    })
});
  
makeServerRequest.then(result => {
    console.log(result);
  });
