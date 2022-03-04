// Objects in JavaScript

// Shallow Cloning
var existing = { a: 1, b: 2, c: 3 };
var clone = {};
for (var prop in existing) {
  if (existing.hasOwnProperty(prop)) {
    clone[prop] = existing[prop];
  }
}

/*-------------------------------------------------------------------*/

// Object.freeze Method
var obj = {
  foo: "foo",
  bar: [1, 2, 3],
  baz: {
    foo: "nested-foo",
  },
};
Object.freeze(obj);
// Cannot add new properties
obj.newProperty = true;
// Cannot modify existing values or their descriptors
obj.foo = "not foo";
Object.defineProperty(obj, "foo", {
  writable: true,
});
// Cannot delete existing properties
delete obj.foo;
// Nested objects are not frozen
obj.bar.push(4);
obj.baz.foo = "new foo";

/*-------------------------------------------------------------*/

// Object Iteration
var obj = { 0: "a", 1: "b", 2: "c" };
Object.keys(obj).map(function (key) {
  console.log(key);
});

/*-------------------------------------------------------------*/

// Object Assign
var user = { firstName: "John" };
Object.assign(user, { lastName: "Doe", age: 39 });
console.log(user); // Logs: {firstName: "John", lastName: "Doe", age: 39}

var obj1 = { a: 1 };
var obj2 = {
  b: 2,
};
var obj3 = { c: 3 };
var obj = Object.assign(obj1, obj2, obj3);
console.log(obj); // Logs: { a: 1, b: 2, c: 3 }
console.log(obj1); // Logs: { a: 1, b: 2, c: 3 }, target object itself is changed

/*-------------------------------------------------------------*/

// Object Spread

obj = { a: 1 };
let obj2 = { ...obj, b: 2, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 };

let obj3 = { ...obj, b: { c: 2 } };
console.log(obj3); // { a: 1, b: { c: 2 } };

/*-------------------------------------------------------------------*/

// Object Getter and Setter

var person = { name: "John", surname: "Doe" };
Object.defineProperty(person, "fullName", {
  get: function () {
    return this.name + " " + this.surname;
  },
  set: function (value) {
    [this.name, this.surname] = value.split(" ");
  },
});
console.log(person.fullName); // -> "John Doe"
person.surname = "Hill";
console.log(person.fullName); // -> "John Hill"
person.fullName = "Mary Jones";
console.log(person.name); // -> "Mary"

/*-------------------------------------------------------------------*/

// Array are objects

var anObject = { foo: "bar", length: "interesting", 0: "zero!", 1: "one!" };

var anArray = ["zero.", "one."];

console.log(anArray[0], anObject[0]); // outputs: zero. zero!
console.log(anArray[1], anObject[1]); // outputs: one. one!
console.log(anArray.length, anObject.length); // outputs: 2 interesting

/*-------------------------------------------------------------------*/

// Convert object to Array

var obj = {
  a: "hello",
  b: "this is",
  c: "javascript!",
};

var array = Object.keys(obj).map(function (key) {
  return obj[key];
});
console.log(array);

/*-------------------------------------------------------------------*/

// Object Keys

var obj = {
  a: "hello",
  b: "this is",
  c: "javascript!",
};
var keys = Object.keys(obj);
console.log(keys);
