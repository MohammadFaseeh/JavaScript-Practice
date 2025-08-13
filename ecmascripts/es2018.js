//* ==========================================
//*    ECMAScript Features (2018) / ES9
//* =========================================

//? List of new useful features added in ES8  👇
// Rest/Spread Properties
// Promise.prototype.finally()

//* ============================
//*  Rest/Spread Properties
//* =============================

//? ES6 introduced the concept of a rest element when working with array destructuring:

// // Rest in function parameters
// function sum(...numbers) {
//   console.log(numbers); // [2, 4, 6]
// }
// sum(2, 4, 6);

// // Rest in array destructuring
// const [first, ...others] = [1, 2, 3, 4];
// console.log(first); // 1
// console.log(others); // [2, 3, 4]

// // =====================================
// // Spread In Array
// const nums = [1, 2, 3];
// console.log(...nums); // 1 2 3

// // Merge arrays
// const moreNums = [...nums, 4, 5];
// console.log(moreNums); // [1, 2, 3, 4, 5]

// // Spread in object
// const obj1 = { a: 1, b: 2 };
// const obj2 = { ...obj1, c: 3 };
// console.log(obj2); // { a: 1, b: 2, c: 3 }

//* ES2018 introduces the same but for objects.

//* ============================
//*  Promise.finally()
//* =============================
//? We will cover later in our Promises section part of the video and you gonna love that part.
