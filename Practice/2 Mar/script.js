// Function in JavaScript

// Scope of Function

function foo() {
    var a = 'hello'; console.log(a); // => 'hello'

}
console.log(a); // reference error

function foo() {
    var a = 'hello';
    function bar() {
        var b = 'world'; console.log(a); // => 'hello' console.log(b); // => 'world'
    }
}
console.log(a); // => 'hello'
console.log(b); // reference error }
console.log(a); // reference error console.log(b); // reference error

/*----------------------------------------------------------------------*/

// Currying

var prism = function (l, w, h) {
    return l * w * h;
}

function prism(l) {
    return function (w) {
        return function (h) {
            return l * w * h;
        }
    }
}


/*----------------------------------------------------------------------*/

// Named Function

var namedSum = function sum(a, b) { // named return a + b;
}
var anonSum = function (a, b) { // anonymous return a + b;
}
namedSum(1, 3);
anonSum(1, 3);

// Name function are hoisted

foo();
var foo = function () { // using an anonymous function
    console.log('bar');
}

foo();
function foo() { // using a named function
    console.log('bar');
}

// Name Function in recursive Senerio
var say = function (times) {
    if (times > 0) {
        console.log('Hello!');
        say(times - 1);
    }
}
sayHelloTimes(2);


/*----------------------------------------------------------------------*/

// Function with unknown number of arguments

function logSomeThings() {
    for (var i = 0; i < arguments.length; ++i) {
        console.log(arguments[i]);
    }
}
logSomeThings('hello', 'world');

function personLogsSomeThings(person, ...msg) {
    msg.forEach(arg => {
        console.log(person, 'says', arg);
    });
}
personLogsSomeThings('John', 'hello', 'world');

const logArguments = (...args) => console.log(args)
const list = [1, 2, 3]
logArguments('a', 'b', 'c', ...list)

const logArguments = (...args) => console.log(args)
function* generateNumbers() {
    yield 6
    yield 5
    yield 4
}
logArguments('a', ...generateNumbers(), ...'pqr', 'b')


/*----------------------------------------------------------------------*/

// Call and Apply

let obj = {
    a: 1,
    b: 2,
    set: function (a, b) {
        this.a = a;
        this.b = b;
    }
};
obj.set(3, 7); // normal syntax
obj.set.call(obj, 3, 7); // equivalent to the above
obj.set.apply(obj, [3, 7]); // equivalent to the above; note that an array is used
console.log(obj); // prints { a: 3, b: 5 }
let myObj = {};
myObj.set(5, 4); // fails; myObj has no `set` property

obj.set.call(myObj, 5, 4); // success; `this` in set() is re-routed to myObj instead of obj
obj.set.apply(myObj, [5, 4]); // same as above; note the array
console.log(myObj); // prints { a: 3, b: 5 }


/*----------------------------------------------------------------------*/

// Passing arguments by reference or value

var obj = { a: 2 }; function myfunc(arg) {
    arg = { a: 5 }; // Note the assignment is to the parameter variable itself 
}
myfunc(obj); console.log(obj.a); // 2

var obj = { a: 2 }; function myfunc(arg) {
    arg.a = 5; // assignment to a property of the argument 
}
myfunc(obj); console.log(obj.a); // 5

var s = 'say'; function myfunc(arg) {
    arg += ' hello'; // assignment to the parameter variable itself 
}
myfunc(s); console.log(s); // 'say'