// Hoisting in JavaScript means: 
// 👉 Before running the code, JavaScript moves function declarations and variable declarations to the top of their scope (global or function).

// It’s like JS is reading the code twice:
// First, it scans and declares all variables and functions.
// Then it runs the code line by line.

//? 1. Variable Hoisting

//a. var is hoisted but initialized with undefined.
// console.log(a);  // undefined (because of var hoisting)
// var a = 10;

//b. let and const are hoisted too but they stay in a "temporal dead zone" until you assign them a value.
// console.log(b);  // ❌ Error (because let is hoisted but not initialized)
// let b = 20;

//Note: Cannot access 'b' before initialization.

//same for const
// console.log(b);  // ❌ Error (because let is hoisted but not initialized)
// const b = 20;

//? 2. Function Hoisting

//a. Function declarations are fully hoisted (you can call them before they appear in code).
// sayHello();   // ✅ Works, because function declaration is hoisted
// function sayHello() {
//   console.log("Hello!"); //Hello
// }

//b. Function expressions (using var/let/const) are treated like variables.
// ❌ Function expression

// with var
// sayHi(); 
// var sayHi = function() {
//   console.log("Hi!"); // TypeError: sayHi is not a function
// };

// with let
// sayHi(); 
// let sayHi = function() {
//   console.log("Hi!"); // ReferenceError: Cannot access 'sayHi' before initialization
// };

// with const
// sayHi(); 
// const sayHi = function() {
//   console.log("Hi!"); // ReferenceError: Cannot access 'sayHi' before initialization
// };

//? 3. Class Hoisting
// Classes are also hoisted but stay in the temporal dead zone like let and const.

// var obj = new Person(); // ❌ Error
// class Person {}

// ReferenceError: Cannot access 'Person' before initialization(same output for let and const)
