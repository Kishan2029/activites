// Loops in JavaScript

// For Loops
for (var i = 0; i < 100; i++) {
  console.log(i);
}

var array = ["a", "b", "c"];
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (var i = 0; i < 100; i += 2) {
  console.log(i);
}

for (var i = 100; i >= 0; i--) {
  console.log(i);
}

/*-------------------------------------------------------------------------------*/

// For...Of loop

const iterable = [0, 1, 2];
for (let i of iterable) {
  console.log(i);
}

// String
const string = "abc";
for (let chr of string) {
  console.log(chr);
}

// Array
const names = ["bob", "alejandro", "zandra", "anna", "bob"];
const uniqueNames = new Set(names);
for (let name of uniqueNames) {
  console.log(name);
}

// Map
const map = new Map().set("abc", 1).set("def", 2);
for (const iteration of map) {
  console.log(iteration); //will log ['abc', 1] and then ['def', 2]
}

// Object
const someObject = { name: "Mike" };
for (let key of Object.keys(someObject)) {
  console.log(key + ": " + someObject[key]);
}

/*-------------------------------------------------------------------------------*/

// For...in Loop

var object = { a: "foo", b: "bar", c: "baz" }; // `a` is inaccessible
Object.defineProperty(object, "a", {
  enumerable: false,
});
for (var key in object) {
  if (object.hasOwnProperty(key)) {
    console.log("object." + key + ", " + object[key]);
  }
}

/*-------------------------------------------------------------------------------*/

// While Loop

var i = 0;
while (i < 100) {
  console.log(i);
  i++;
}

// Do...While Loop

var i = 101;
do {
  console.log(i);
} while (i < 100);

/*-------------------------------------------------------------------------------*/

// Break and Continue
var i = 0;
while (i < 3) {
  if (i === 1) {
    i = 2;
    continue;
  }
  console.log(i);
  i++;
}

outerloop: for (var i = 0; i < 3; i++) {
  innerloop: for (var j = 0; j < 3; j++) {
    console.log(i);
    console.log(j);
    if (j == 1) {
      break outerloop;
    }
  }
}
