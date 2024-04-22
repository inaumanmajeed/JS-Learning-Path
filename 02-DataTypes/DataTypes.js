// some code examples of extra rules in JavaScript

"use strict"; // use strict mode to catch common coding errors and unsafe actions (e.g. using undeclared variables) - always use strict mode in modern JS development (it's the default in ES6). 

console.alert('Data Types in JavaScript'); //using node some, functions like alert are not available in node, so this will throw an error

console.log ( 3 
    + 
    3 ); // readablity is important in code, so you can break up lines of code like this to make it easier to read and understand but its not necessary to do so, and its a bad practice to break up lines of code like this in the middle of a string or a statement.


// Data Types in JavaScript

// 1. Primitive Data Types - stored directly in the location the variable accesses, stored on the stack (memory set aside for the program to run)
// 1.1. String - sequence of characters, used for text (e.g. 'Hello World')
let name = 'John Doe';
// 1.2. Number - floating point numbers, integers, decimals, etc. (e.g. 3, 3.14, -10)
let age = 30;
// 1.3. Boolean - true or false
let isTrue = true;
// 1.4. Null - intentional absence of any value, standalone value that represents nothing
let car = null;
// 1.5. Undefined - variables that have not been assigned a value, its an object that has not been defined yet in the code
let test;
// 1.6. Symbols (ES6) - unique values that are not equal to any other value
const sym = Symbol();
// 1.7. BigInt (ES10) - large integers than the Number type can hold
const bigInt = 1234567890123456789012345678901234567890n;


// 2. Reference Data Types - accessed by reference, objects that are stored on the heap (memory set aside for the program to run), a pointer to a location in memory
// 2.1. Arrays - a list of values (e.g. [1, 2, 3, 4, 5]) - arrays are objects in JavaScript and are reference data types
const hobbies = ['movies', 'music', 'reading'];
// 2.2. Object Literals - key-value pairs (e.g. {name: 'John', age: 30}) - objects are reference data types in JavaScript
const address = { city: 'Boston', state: 'MA' }; 
// 2.3. Functions - blocks of code that can be defined and then called by name (e.g. function() {return 'Hello World'}) - functions are objects in JavaScript and are reference data types
const today = function() {
    return new Date();
}
// 2.4. Dates - used to work with dates and times (e.g. new Date()) - dates are objects in JavaScript and are reference data types
const todayDate = new Date();
// 2.5. Anything else - all other reference data types in JavaScript are objects (e.g. Math, Regular Expressions, etc.) - objects are reference data types in JavaScript