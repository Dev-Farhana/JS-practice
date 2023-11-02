//Q1 Testing Objects for Properties
// To check if a property on a given object exists or not, you can use the .hasOwnProperty() method. someObject.hasOwnProperty(someProperty) returns true or false depending on if the property is found on the object or not.

function checkObj(obj, checkProp) {
    // Only change code below this line
    return "Change Me!";
    // Only change code above this line
  }

function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    } else {
      return "Not Found";
    }
}

//Q2 Manipulating Complex Objects
const myMusic_ = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [ "CD", "8T", "LP" ],
      "gold": true
    }
  ];

//   Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.

const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": ["CD", "8T", "LP" ],
    "gold": true
  },
  {
    artist: "Jennie",
    title: "Don't Mess with the Girls",
    release_year: 1999,
    formats: ["MP3", "Video"]
  }  
];

//Q3 Accessing Nested Objects
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

// const gloveBoxContents = undefined;
// Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.

// console.log(myStorage.car["inside"]["glove box"] = "gloveBoxContents" );
const gloveBoxContents = myStorage.car.inside["glove box"] ;
console.log(gloveBoxContents);

// Q4 Accessing Nested Arrays
const myPlants = [
  {
    type: "flowers",
    list: [ "rose", "tulip", "dandelion"]
  },
  {
    type: "trees",
    list: [  "fir", "pine", "birch" ]
  }
];

// const secondTree = "";
// Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.
const secondTree = myPlants[1].list[1];

// Q5 Record Collection
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if(value === ""){
    delete records[id][prop];
  }else if( prop !== "tracks" && value !== ""){
    records[id][prop] = value;
  }else if( prop === "tracks" && value !== "" ){
    if(records[id].hasOwnProperty("tracks") === false ){
      records[id][prop] = [];
    }
    records[id][prop].push(value);
  }

  return records;
}


console.log(
updateRecords(recordCollection, 5439, 'artist', 'ABBA'));


// ---------------------------------------------------------------the end------------
