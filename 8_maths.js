//* ==========================
//* Math Object in JavaScript
//* ==========================

//* Math: The Math namespace object contains static properties and methods for mathematical constants and functions.
//* Math works with the Number type. It doesn't work with BigInt.

//? 1: Constants:
//* - Math.PI: Represents the mathematical constant Pi (π).
// const piValue = Math.PI;
// console.log(piValue); // 3.141592653589793

//* =========================================
//* 1. Basic Operations:
//* =========================================

//? Math.abs(): The Math.abs() static method returns the absolute value of a number.
// or in simple, how far the number is from 0. It will be always positive

// console.log(Math.abs(5)); // 5
// console.log(Math.abs(-115)); // 115

//? Math.round(x): Rounds a number to the nearest integer.
// const roundedValue = Math.round(3.7);
// console.log(roundedValue); //4

//? Math.ceil(x): Returns the value of x rounded up to its nearest integer:
// const ceilValue = Math.ceil(3.7);
// console.log(ceilValue); //4

//? Math.floor(x): Returns the value of x rounded down to its nearest integer.
// const floorValue = Math.floor(3.7);
// console.log(floorValue); //3

//? Math.trunc(x): Returns the integer part of x:
// const truncValue = Math.trunc(15.7);
// console.log(truncValue); //15

//todo Math.trunc() and Math.sign() were added to JavaScript 2015 - ES6.
// const truncValue = Math.trunc(-3.7); //-3
// const floorValue = Math.floor(-3.1); //-4
// console.log(truncValue);
// console.log(floorValue);

//todo Notes:
// No matter how many chars are there after decimal, they all will always return only number before the decimal.
// round rounds to the nearest integer.
// floor always rounds down.
// ceil always rounds up.

//* =========================================
//* 2. Exponential and Logarithmic Functions:
//* =========================================

//? Math.pow(x, y): Returns the value of x to the power of y.
// console.log(Math.pow(2, 5)); // used but not recommended
// console.log(2 ** 5); // use this its new way

//? Math.sqrt(): Math.sqrt(x) returns the square root of x:
// let squareRoot = Math.sqrt(25);
// console.log(squareRoot); // 5

//? Math.log(x) returns the natural logarithm of x.
// let logResult = Math.log(1); // 0
// let logResult = Math.log(2); // 0.6931471805599453
// console.log(logResult);

//? Math.log2(x) returns the base 2 logarithm of x.
// let logResult = Math.log2(8); //3
// console.log(logResult);

//? Math.max(a, b, ...)	Returns the largest value	
// Math.max(2, 5, 1) → 5

//? Math.min(a, b, ...)	Returns the smallest value	
// Math.min(2, 5, 1) → 1

//* =================================
//* Now Numbers Object in JavaScript
//* =================================
// 1. toFixed() What it does: Fixes the number of digits after the decimal point.
// let num = 12.3456;
// console.log(num.toFixed(2)); // "12.35"
// console.log(num.toFixed(0)); // "12"

// 2. toString() → make it a string (or binary/hex).
// let num = 255;
// console.log(num.toString());   // "255"

// 3. toPrecision() What it does: Sets the total number of significant digits (from start to end of number, not just decimals).
// let num = 12.3456;
// console.log(num.toPrecision(2)); // "12"
// console.log(num.toPrecision(4)); // "12.35"

// 4. toLocaleString() Converts number into a local format (with commas, currency, etc.), based on your region.
// let num = 1234567.89;
// console.log(num.toLocaleString()); // "1,234,567.89" (US)
// console.log(num.toLocaleString('de-DE')); // "1.234.567,89" (Germany)


//* =========================================
//* Interview Question
//* =========================================

//! Generate Random number
// 1. Math.random(): Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)
// console.log(Math.random());

// 2. Random number between 0 and 9:
// let rand = Math.floor(Math.random() * 10);
// console.log(rand); // 0 to 9

// 3. Random number between 1 and 10:
// let rand = Math.floor(Math.random() * 10) + 1;
// console.log(rand); // 1 to 10

// 4. Random number between 1 and 100 with upto 3 decimal digits
// console.log((Math.random() * 100).toFixed(3));
