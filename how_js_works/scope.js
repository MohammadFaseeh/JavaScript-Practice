//* =====================
//*  Scope in JavaScript
//* =====================
// 👉 Scope means: Where in the code you can access (use) a variable or function.
// Think of it like "the area where a variable lives."

// Types of Scope in JavaScript
// We have a Global Scope, Function Scope and Block Scope

// 1. Global Scope:
//? Variables: Variables declared outside of any function or block have global scope.
//? Access: Global variables are accessible from any part of the code, including inside functions and blocks.

// const globalVariable = "I am a global variable";
// function exampleFunction() {
//   console.log(globalVariable); // Accessible within the function
// }
// console.log(globalVariable); // Accessible globally

// 2. Function Scope:
// Variables: Variables declared inside a function have function scope.
// Access: Function-scoped variables are only accessible within the function where they are declared.

//  function exampleFunction() {
//     var functionScopedVar = "I am a function-scoped variable";
//     console.log(functionScopedVar); // Accessible within the function
//   }
// console.log(functionScopedVar); // Error: functionScopedVar is not defined

// 3. Block Scope:
// Variables: Variables declared with let and const inside a block (e.g., an if statement or a for loop) have block scope.
// Access: Block-scoped variables are only accessible within the block where they are declared.

// if (true) {
//   let age = 25;   // Block scope
//   console.log(age); // ✅ Works here
// }
// console.log(age); // ❌ Error, outside the block

//! ------------------------------
// ! Interview Question
//! -----------------------------

//!  Global Variable vs. Local Variable:

//? Global Variable: A variable declared in the global scope is referred to as a global variable.
//? Local Variable: A variable declared within a function (function scope) or a block (block scope) is often referred to as a local variable.

// Example:
// const globalVariable = "I'm a global variable";
// function myFunction() {
//   // Function scope
//   const functionVariable = "I'm a function variable";
//   if (true) {
//     // Block scope
//     const blockVariable = "I'm a block variable";
//   }
//   console.log(functionVariable);
// }
// myFunction(); // I'm a function variable

//* =================
//  Lexical Scoping:
//* =================
//? Lexical scoping in JavaScript is like a "set of rules" that determines where a variable can be used in your code.
// It follows the physical structure of your code, so if a variable is declared inside a function or block, it can usually be used only within that function or block.

//? Lexical scoping means a function can access variables from its outer scope where it was written (defined), not where it was called (executed).

// function outer() {
//   let outerVar = "I am from outer";

//   function inner() {
//     console.log(outerVar); // ✅ inner can access outerVar it rule that it tell and clourse work on this rule
//   }

//   inner();
// }

// outer();

//* -------------------------
//  * Scope Chaining:
//* -------------------------
// When you try to access a variable, JavaScript looks for it in the current scope.
// If not found → looks in the outer scope.
// Keeps going up until the global scope.
// If not found anywhere → ReferenceError.

// let globalVar = "I am global";

// function outer() {
//   let outerVar = "I am outer";

//   function inner() {
//     let innerVar = "I am inner";
//     console.log(innerVar);   // ✅ Found in inner
//     console.log(outerVar);   // ✅ Found in outer (scope chain)
//     console.log(globalVar);  // ✅ Found in global (scope chain)
//     // console.log(notExist); // ❌ Error (not found anywhere)
//   }

//   inner();
// }

// outer();

//? Key Concept: Variables in inner scopes have access to variables in their outer scopes, creating a chain of accessible scopes.
